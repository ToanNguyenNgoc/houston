import { ReqBooking, Villa } from "@/interfaces"
import { useBookingStore, useProfileStore } from "@/stores/zustand"
import { ZBookingState, ZProfileState } from "@/stores/zustand/type"
import style from './villa-detail.module.css'
import { useRef, useState } from "react"
import { DateRangePicker } from "react-date-range"
import { vi } from "date-fns/locale"
import { useForm } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'
import moment from 'moment'
import * as Yup from 'yup'
import { useRouter } from "next/router"
import { yupResolver } from "@hookform/resolvers/yup"

interface IDateRange {
  start: any,
  end: any
}
interface FormValue {
  from_date_booking: string,
  to_date_booking: string,
  customer_count: number | string,
  baby_count: number | string,
  note: string
}

const schema = Yup.object({
  from_date_booking: Yup.string().required('Chọn ngày đến'),
  to_date_booking: Yup.string().required('Chọn ngày trả'),
  customer_count: Yup.number()
    .min(1, 'Số lượng khách không hợp lệ')
    .max(20, 'Lượng khách tối đa 20 người')
    .required('Vui lòng chọn số lượng khách'),
  baby_count: Yup.number().min(0, 'Số lượng khách không hợp lệ')
})

export const FormBooking = ({ villa }: { villa: Villa }) => {
  const [profile] = useProfileStore((state: ZProfileState) => [state.profile])
  const [onSetBooking] = useBookingStore((state: ZBookingState) => [state.onSetBooking])
  const router = useRouter()
  const rangeDateRef = useRef<HTMLDivElement>(null)
  const onShowRangDate = () => {
    if (rangeDateRef.current) {
      rangeDateRef.current.classList.add(style.range_date_act)
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('click', () => {
      rangeDateRef.current?.classList.remove(style.range_date_act)
    })
  }
  const [dateRange, setDateRange] = useState<IDateRange>({ start: new Date(), end: new Date() })
  const selectionRange = {
    startDate: dateRange.start,
    endDate: dateRange.end,
    key: 'selection',
  }
  const { register, handleSubmit, setValue, formState: { errors }, getValues } = useForm<FormValue>({
    resolver: yupResolver(schema),
    defaultValues: {
      from_date_booking: moment().format('YYYY-MM-DD'),
      to_date_booking: moment().add(1, 'days').format('YYYY-MM-DD'),
      customer_count: 1,
      baby_count: 0,
      note: ''
    }
  })
  const onChange = (e: any) => {
    const start = e.selection.startDate
    const end = e.selection.endDate
    setValue('from_date_booking', moment(start).format('YYYY-MM-DD'))
    setValue('to_date_booking', moment(end).format('YYYY-MM-DD'))
    setDateRange({
      start: start,
      end: end
    })
  }
  const onSubmit = (value: FormValue) => {
    const { from_date_booking, to_date_booking, note, customer_count, baby_count } = value
    if (villa.branch) {
      const data: any = {
        branch_id: villa.branch?.id,
        villa_id: villa.id,
        recaptcha: '',
        from_date_booking,
        to_date_booking,
        customer_count,
        baby_count,
        note
      }
      router.push('/check-out')
      onSetBooking(villa, data)
    }
  }
  return (
    <>
      <div className={style.booking_form_cnt}>
        <span className={style.booking_form_title}>Đặt phòng</span>
        <form onSubmit={
          profile ? handleSubmit(onSubmit)
            :
            (e) => { e.preventDefault(); router.push('/auth/login') }
        } className={style.booking_form}>
          <div
            onClick={(e) => { e.stopPropagation(); onShowRangDate() }}
            className={`${style.form_row} ${style.form_row_col_2}`}
          >
            <input type="text"
              disabled
              className={`app-input ${style.input_date}`}
              placeholder="Từ ngày"
              {...register('from_date_booking')}
            />
            <input type="text"
              disabled
              className={`app-input ${style.input_date}`}
              placeholder="Đến ngày"
              {...register('to_date_booking')}
            />
            <div ref={rangeDateRef} className={style.range_date_cnt}>
              <DateRangePicker
                className={style.booking_range_date_picker}
                color='#015258'
                minDate={new Date()}
                locale={vi}
                ranges={[selectionRange]}
                onChange={onChange}
              />
            </div>
          </div>
          <div className={style.form_row}>
            <label className={style.form_row_label}>Số lượng khách</label>
            <input style={{ marginTop: '8px' }} {...register('customer_count')} type='number' className="app-input" />
            {
              getValues('customer_count') !== '' &&
              <p className={style.form_row_error}>{errors.customer_count?.message}</p>
            }
          </div>
          <div className={style.form_row}>
            <label className={style.form_row_label}>Số trẻ em (dưới 11 tuổi)</label>
            <input style={{ marginTop: '8px' }} {...register('baby_count')} type='number' className="app-input" />
            {
              getValues('baby_count') !== '' &&
              <p className={style.form_row_error}>{errors.baby_count?.message}</p>
            }
          </div>
          <div className={style.form_row}>
            <textarea className={style.note} placeholder="Ghi chú" />
          </div>
          <div className={style.form_bot}>
            <LoadingButton
              variant='contained' size='large'
              style={{ backgroundColor: 'var(--primary)' }}
              className={style.form_bot_btn} type='submit' >
              Xác nhận đặt phòng
            </LoadingButton>
          </div>
        </form>
      </div>
    </>
  )
}