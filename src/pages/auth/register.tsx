import { NextPageWithLayout } from "@/common"
import { SignLayout } from "@/layouts"
import React, { useState } from "react"
import style from "@/styles/login.module.css"
import { LoadingButton } from "@mui/lab";
import { useMutation } from "@tanstack/react-query";
import { ReqRegister } from "@/interfaces";
import { api } from "@/services";
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { validate } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNoti } from "@/hooks";
import { AppSnack } from "@/components";
import { Button } from "@mui/material";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

const Register: NextPageWithLayout = React.memo(function Register() {
  const [step, setStep] = useState(1)
  const router = useRouter()
  const { noti, resultLoad, onCloseNoti } = useNoti()
  const schema = Yup.object({
    email: Yup.string().required('Vui lòng nhập email')
      .matches(validate.email, { message: 'Vui lòng nhập đúng định dạng' }),
    fullname: step === 1 ? Yup.string() : Yup.string().required('Vui lòng nhập họ và tên'),
    telephone: step === 1 ? Yup.string() : Yup.string().required('Vui lòng nhập số điện thoại'),
    password: step === 1 ? Yup.string() : Yup.string().required('Vui lòng nhập mật khẩu'),
    confirm_password: step === 1 ? Yup.string() :
      Yup.string()
        .required('Vui lòng nhập lại mật khẩu')
        .oneOf([Yup.ref("password"), null], 'Mật khẩu nhập lại không đúng'),
    code: step === 1 ? Yup.string() : Yup.string().required('Vui lòng nhập mã OTP')
  })
  const { handleSubmit, formState: { errors }, register } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      fullname: '',
      telephone: '',
      code: '',
      confirm_password: ''
    }
  })
  const { mutate, isLoading } = useMutation({
    mutationKey: ['REGISTER'],
    mutationFn: (body: ReqRegister) => api.register(body),
    onSuccess: () => {
      resultLoad({
        message: step === 1 ? 'Đã gửi email' : 'Đăng ký thành công',
        color: 'success'
      })
      setStep(2)
      if (step === 2) {
        setTimeout(() => { router.push('/auth/login') })
      }
    },
    onError: (error) => {
      const err = error as AxiosError<{ message: string }>
      resultLoad({
        message: err.response?.data?.message ?? '',
        color: 'error'
      })
    }
  })
  const onSubmit = (data: ReqRegister) => {
    mutate(data)
  }
  return (
    <>
      <AppSnack
        open={noti.openAlert}
        close={onCloseNoti}
        severity={noti.color}
        message={noti.message}
      />
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
                loading={isLoading}
                type='submit'
              >
                Lấy mã xác thực
              </LoadingButton>
            </div>
          </form>
          :
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.form_row}>
              <input disabled {...register('email')} type="text" className="app-input" placeholder="Email" />
              <Button
                onClick={() => setStep(1)}
                variant='text'
                className={style.form_row_change_mail}
                size="small" >
                Đổi email
              </Button>
            </div>
            <div className={style.form_row}>
              <input {...register('fullname')} type="text" className="app-input" placeholder="Họ và tên" />
              {errors.fullname && <p className={style.form_row_error}>{errors.fullname.message}</p>}
            </div>
            <div className={style.form_row}>
              <input {...register('telephone')} type="text" className="app-input" placeholder="Số điện thoại" />
              {errors.telephone && <p className={style.form_row_error}>{errors.telephone.message}</p>}
            </div>
            <div className={style.form_row}>
              <input {...register('password')} type="password" className="app-input" placeholder="Mật khẩu" />
              {errors.password && <p className={style.form_row_error}>{errors.password.message}</p>}
            </div>
            <div className={style.form_row}>
              <input {...register('confirm_password')} type="password" className="app-input" placeholder="Nhập lại mật khẩu" />
              {errors.confirm_password && <p className={style.form_row_error}>{errors.confirm_password.message}</p>}
            </div>
            <div className={style.form_row}>
              <input {...register('code')} type="text" className="app-input" placeholder="Mã xác thực" />
              {errors.code && <p className={style.form_row_error}>{errors.code.message}</p>}
            </div>
            <div className={style.form_btn}>
              <LoadingButton
                style={{ backgroundColor: 'var(--primary)' }}
                variant='contained'
                loading={isLoading}
                type='submit'
              >
                Đăng ký
              </LoadingButton>
            </div>
          </form>
      }
    </>
  )
});
Register.Layout = SignLayout
export default Register