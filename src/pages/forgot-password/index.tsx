import { NextPageWithLayout } from "@/common";
import { AppSnack } from "@/components";
import { captKey } from "@/config";
import { useNoti } from "@/hooks";
import { AxiosCusError, ReqForgot } from "@/interfaces";
import { SignLayout } from "@/layouts";
import { api } from "@/services";
import style from "@/styles/forgot-password.module.css"
import { validate } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form";
import * as Yup from "yup"

interface ResError {
  error: string;
  message: string[] | string;
  statusCode: number
}

const ForgotPassword: NextPageWithLayout = () => {
  const [step, setStep] = useState(1)
  const { noti, resultLoad, onCloseNoti, firstLoad } = useNoti()
  const [captcha, setCaptcha] = useState('')
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false)
  const router = useRouter()
  const verifyRecaptchaCallback = (token: string) => {
    setCaptcha(token)
  }
  const schema = Yup.object({
    email: Yup.string().required('Vui lòng nhập email')
      .matches(validate.email, { message: 'Vui lòng nhập đúng định dạng' }),
    new_password: step === 1 ? Yup.string() : Yup.string().required('Vui lòng nhập mật khẩu'),
    // confirm_password: step === 1 ? Yup.string() :
    //   Yup.string()
    //     .required('Vui lòng nhập lại mật khẩu')
    //     .oneOf([Yup.ref("password"), null], 'Mật khẩu nhập lại không đúng'),
    code: step === 1 ? Yup.string() : Yup.string().required('Vui lòng nhập mã OTP')
  })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      new_password: '',
      code: ''
    }
  })
  const { mutate } = useMutation({
    mutationFn: (body: ReqForgot) => api.forgot(body),
    onSuccess: () => {
      setRefreshReCaptcha(r => !r)
      if (step === 1) {
        resultLoad({ message: "Mã xác thực đã được gửi đến Email của bạn", color: "success" })
      }
      setStep(2)
      if (step === 2) {
        resultLoad({ message: "Thay đổi mật khẩu thành công", color: "success" })
        setTimeout(() => { router.push('/auth/login') }, 3000)
      }
    },
    onError: (err: AxiosCusError<ResError>) => {
      setRefreshReCaptcha(r => !r)
      resultLoad({
        message: Array.isArray(err.response.data.message) ? err.response.data.message[0] : err.response.data.message,
        color: 'error'
      })
    }
  })
  const onSubmit = (value: any) => {
    if (captcha === "") {
      setRefreshReCaptcha(r => !r)
    } else {
      firstLoad()
      mutate({ ...value, recaptcha: captcha })
    }
  }
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={captKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      <SignLayout isForgot>
        <AppSnack
          open={noti.openAlert}
          close={onCloseNoti}
          message={noti.message}
          severity={noti.color}
        />
        <div className={style.container}>
          <p className={style.title}>
            Quên mật khẩu
          </p>
          {
            step === 1 ?
              <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form_row}>
                  <input {...register('email')} type="text" className="app-input" placeholder="Email" />
                  {errors.email && <p className={style.form_row_error}>{errors.email.message}</p>}
                </div>
                <div className={style.form_btn}>
                  <LoadingButton
                    style={{ backgroundColor: 'var(--primary)' }}
                    variant='contained'
                    loading={noti.load}
                    type='submit'
                  >
                    Lấy mã xác thực
                  </LoadingButton>
                </div>
              </form>
              :
              <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form_row}>
                  <input disabled {...register('email')} type="text" className="app-input" placeholder="Email" />
                </div>
                <div className={style.form_row}>
                  <input  {...register('new_password')} type="password" className="app-input" placeholder="Mật khẩu" />
                  {errors.new_password && <p className={style.form_row_error}>{errors.new_password.message}</p>}
                </div>
                <div className={style.form_row}>
                  <input {...register('code')} type="text" className="app-input" placeholder="Mã OTP" />
                  {errors.code && <p className={style.form_row_error}>{errors.code.message}</p>}
                </div>
                <div className={style.form_btn}>
                  <LoadingButton
                    style={{ backgroundColor: 'var(--primary)' }}
                    variant='contained'
                    loading={noti.load}
                    type='submit'
                  >
                    Đổi mật khẩu
                  </LoadingButton>
                </div>
              </form>
          }
        </div>
        <GoogleReCaptcha refreshReCaptcha={refreshReCaptcha} onVerify={verifyRecaptchaCallback} />
      </SignLayout>
    </GoogleReCaptchaProvider>
  )
}
export default ForgotPassword