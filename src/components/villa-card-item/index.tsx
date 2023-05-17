/* eslint-disable @next/next/no-img-element */
import { Villa } from '@/interfaces'
import style from './vall-card.module.css'
import Link from 'next/link'
import { fmPrice, slugify } from '@/utils'

export const VillaCard = ({ villa }: { villa: Villa }) => {
  return (
    <Link
      href={`/danh-sach-villa/${slugify(villa.name)}&id=${villa.id}`}
      className={style.container}
    >
      <div className={style.image_cnt}>
        <img src={villa.thumbnail?.original_url} alt="" className={style.image} />
      </div>
      <div className={style.detail}>
        <span className={style.detail_name}>{villa.name}</span>
        <span className={style.detail_address}>{villa.branch?.address}</span>
        <div className={style.detail_price}>
          {
            villa.special_price < villa.price ?
              <>
                <p style={{ color: 'var(--orange)' }} >{fmPrice(villa.special_price)} VND/đêm</p>
                <p>{fmPrice(villa.price)}</p>
              </>
              :
              <p>{fmPrice(villa.price)} VND/đêm</p>
          }
        </div>
      </div>
    </Link>
  )
}