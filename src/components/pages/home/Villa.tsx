import { Villa } from "@/interfaces"
import style from './home.module.css'
import { Container } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/services"
import { useState } from "react"
import { VillaCard } from "@/components/villa-card-item"

export const HomeVilla = () => {
  const [cate, setCate] = useState<number | string | undefined>()
  const { data } = useQuery({
    queryKey: ['HOME_VILLA_CATE'],
    queryFn: () => api.villaCates({ page: 1, limit: 15, status: true })
  })
  const cates = data?.data ?? []
  const { data: dataVilla } = useQuery({
    queryKey: ['HOME_VILLA', cate],
    queryFn: () => api.villas({
      page: 1,
      limit: 12,
      villa_cate_id: cate,
      includes: 'full_address'
    })
  })
  const villas = dataVilla?.data ?? []
  return (
    <Container>
      <div className={style.villa_title}>
        Biệt thự nổi bật
      </div>
      <div className={style.villa_cate_cnt}>
        <ul className={style.villa_cate_list}>
          <li
            style={!cate ? { backgroundColor: 'var(--primary)', color: 'var(--white)' } : {}}
            onClick={() => setCate(undefined)}
            className={style.villa_cate_item}
          >
            Tất cả
          </li>
          {
            cates.map(item => (
              <li
                style={item.id === cate ? { backgroundColor: 'var(--primary)', color: 'var(--white)' } : {}}
                onClick={() => setCate(item.id)}
                key={item.id} className={style.villa_cate_item}
              >
                {item.villa_cate_name}
              </li>
            ))
          }
        </ul>
      </div>
      <div className={style.villa_cnt}>
        <ul className={style.villa_list}>
          {
            villas.map(item => (
              <li key={item.id} className={style.villa_item}>
                <VillaCard villa={item} />
              </li>
            ))
          }
        </ul>
      </div>
    </Container>
  )
}