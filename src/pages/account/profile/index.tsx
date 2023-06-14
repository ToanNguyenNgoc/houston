/* eslint-disable @next/next/no-img-element */
import { NextPageWithLayout } from "@/common";
import { AppSnack, ButtonUpload, Seo } from "@/components";
import { ReqProfile } from "@/interfaces";
import { AccountLayout } from "@/layouts";
import { PageHeaderAccount } from "@/pages/account/bookings";
import { api } from "@/services";
import { useProfileStore } from "@/stores/zustand";
import { ZProfileState } from "@/stores/zustand/type";
import style from '@/styles/account.module.css'
import { LoadingButton } from "@mui/lab";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import * as Yup from "yup"
import { validate } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNoti, usePostMedia } from "@/hooks";

const schema = Yup.object({
  fullname: Yup.string().required('Vui lòng nhập họ và tên'),
  telephone: Yup.string().required('Vui lòng nhập số điện thoại')
    .matches(validate.phoneVn, { message: 'Vui lòng nhập đúng ddijng dạng' }),
  full_address: Yup.string().required('Vui lòng nhập địa chỉ'),
})

const Profile: NextPageWithLayout = () => {
  const [isLoading] = useProfileStore((state: ZProfileState) => [state.isLoading])
  return (
    <>
      <Seo title="Tài khoản của tôi" description="" url="" />
      <PageHeaderAccount title="Tài khoản của tôi" />
      <div className={style.account_page_body}>
        {!isLoading && <ProfileForm />}
      </div>
    </>
  )
}
Profile.Layout = AccountLayout
export default Profile
const ProfileForm = () => {
  const [profile, putProfile] = useProfileStore((state: ZProfileState) => [state.profile, state.putProfile])
  const { resultLoad, noti: { openAlert, message, color }, onCloseNoti } = useNoti()
  const { handlePostMedia } = usePostMedia()
  const [sex, setSex] = useState(profile?.sex);
  const [dob, setDob] = useState<Date | null>(profile?.dob ? new Date(profile.dob) : new Date())
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullname: profile?.fullname,
      email: profile?.email,
      telephone: profile?.telephone,
      ccid: profile?.ccid,
      full_address: profile?.full_address
    }
  })
  const { mutate, isLoading } = useMutation({
    mutationKey: ['PUT_PROFILE'],
    mutationFn: (body: ReqProfile) => api.putProfile(body),
    onSuccess: (res) => {
      putProfile(res.data)
      resultLoad({
        message: 'Đã thay đổi thông tin cá nhân',
        color: 'success'
      })
    },
    onError: () => {
      resultLoad({
        color: 'error',
        message: 'Có lỗi xảy ra'
      })
    }
  })
  const onSubmit = (body: ReqProfile) => {
    mutate({
      ...body,
      telephone: body.telephone !== profile?.telephone ? body.telephone : undefined,
      sex: sex,
      dob: moment(dob).format('YYYY-MM-DD')
    })
  }
  const onChangeMedia = async (e: ChangeEvent<HTMLInputElement>) => {
    handlePostMedia({
      e,
      callBack: (data) => {
        mutate({ media_id: data[0].mediaId })
      },
    })
  }
  const onChangeSex = (event: ChangeEvent<HTMLInputElement>) => {
    let v = false
    if (event.target.value === 'true') { v = true }
    setSex(v)
  }
  return (
    <>
      <AppSnack
        open={openAlert}
        message={message}
        severity={color}
        close={onCloseNoti}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${style.acc_form_row} ${style.row_avatar}`}>
          <label className={style.acc_form_row_label}>Avatar</label>
          <div className={style.form_avatar}>
            <img src={profile?.avatar?.original_url ?? profile?.social_avatar} alt="" />
            <ButtonUpload
              onChange={onChangeMedia}
              className={style.form_avatar_btn}
              iconColor="var(--white)"
            />
          </div>
        </div>
        <div className={style.acc_form_row}>
          <label className={style.acc_form_row_label}>Họ & tên</label>
          <div className={style.acc_form_row_ip}>
            <input {...register('fullname')} type="text" className="app-input" />
            <span className={style.acc_form_row_ip_error}>{errors?.fullname?.message}</span>
          </div>
        </div>
        <div className={style.acc_form_row}>
          <label className={style.acc_form_row_label}>Email</label>
          <div className={style.acc_form_row_ip}>
            <input {...register('email')} disabled type="text" className="app-input" />
          </div>
        </div>
        <div className={style.acc_form_row}>
          <label className={style.acc_form_row_label}>Số điện thoại</label>
          <div className={style.acc_form_row_ip}>
            <input {...register('telephone')} type="text" className="app-input" />
            <span className={style.acc_form_row_ip_error}>{errors?.telephone?.message}</span>
          </div>
        </div>
        <div className={style.acc_form_row}>
          <label className={style.acc_form_row_label}>Mã CCCD</label>
          <div className={style.acc_form_row_ip}>
            <input {...register('ccid')} type="text" className="app-input" />
          </div>
        </div>
        <div className={style.acc_form_row}>
          <label className={style.acc_form_row_label}>Địa chỉ</label>
          <div className={style.acc_form_row_ip}>
            <input {...register('full_address')} type="text" className="app-input" />
            <span className={style.acc_form_row_ip_error}>{errors?.full_address?.message}</span>
          </div>
        </div>
        <div className={style.acc_form_row}>
          <label className={style.acc_form_row_label}>Giới tính</label>
          <div className={style.acc_form_row_ip}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={onChangeSex}
              value={sex}
            >
              <FormControlLabel value={true} control={<Radio style={{ color: 'var(--primary)' }} />} label="Nam" />
              <FormControlLabel value={false} control={<Radio style={{ color: 'var(--primary)' }} />} label="Nữ" />
            </RadioGroup>
          </div>
        </div>
        <div className={style.acc_form_row}>
          <label className={style.acc_form_row_label}>Ngày sinh</label>
          <div className={style.acc_form_row_ip}>
            <DatePicker
              value={dob}
              disableFuture
              onChange={(e) => setDob(e)}
            />
          </div>
        </div>
        <div className={style.acc_form_bot}>
          <LoadingButton
            style={{ backgroundColor: 'var(--primary)' }}
            variant='contained'
            size='large'
            type='submit'
            loading={isLoading}
          >
            Lưu thay đổi
          </LoadingButton>
        </div>
      </form>
    </>
  )
}