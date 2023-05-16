import { NextPageWithLayout } from "@/common"
import { ReqLogin } from "@/interfaces";
import { SignLayout } from "@/layouts"
import { api } from "@/services";
import { LoadingButton } from "@mui/lab";
import { useMutation } from "@tanstack/react-query";
import React from "react"
import Cookies from "js-cookie"
import { useProfileStore } from "@/stores/zustand";
import { ZProfileState } from "@/stores/zustand/type";
import style from '@/styles/login.module.css'
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { validate } from "@/utils";
import { useRouter } from "next/router";
import Link from "next/link";
import { useNoti } from "@/hooks";
import { AppSnack } from "@/components";

const schema = Yup.object({
  email: Yup.string().required('Vui lòng nhập email')
    .matches(validate.email, { message: 'Vui lòng nhập đúng định dạng' }),
  password: Yup.string().required('Vui lòng nhập mật khẩu')
})

const Login: NextPageWithLayout = () => {
  const router = useRouter()
  const { resultLoad, onCloseNoti, noti } = useNoti()
  const { register, formState: { errors }, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: '', password: '' }
  })
  const [getProfile] = useProfileStore((state: ZProfileState) => [state.getProfile])
  const { mutate, isLoading } = useMutation({
    mutationKey: ['LOGIN'],
    mutationFn: (body: ReqLogin) => api.login(body),
    onSuccess: async (res) => {
      Cookies.set('token_expired_at', res.data.token_expired_at, { secure: true })
      Cookies.set('access_token', res.data.token,{secure:true})
      getProfile()
      router.push('/')
      reset()
    },
    onError: () => {
      resultLoad({ message: 'Có lỗi xảy ra. Vui lòng thử lại', color: 'error' })
    }
  })
  const onSubmit = (data: ReqLogin) => {
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
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className={style.form_row}>
          <input {...register('email', { required: true })}
            type="text" className="app-input" placeholder="Email"
          />
          {errors.email && <p className={style.form_row_error}>{errors.email.message}</p>}
        </div>
        <div className={style.form_row}>
          <input
            {...register('password', { required: true })}
            type="password" className="app-input" placeholder="Mật khẩu"
          />
          {errors.password && <p className={style.form_row_error}>{errors.password.message}</p>}
        </div>
        <div className={style.form_btn}>
          <Link className={style.form_btn_forgot} href={'/forgot'} >Quên mật khẩu</Link>
          <LoadingButton
            type='submit'
            style={{ backgroundColor: 'var(--primary)' }}
            loading={isLoading}
            variant='contained' >
            Đăng nhập
          </LoadingButton>
        </div>
      </form>
    </>
  )
}
Login.Layout = SignLayout
export default Login