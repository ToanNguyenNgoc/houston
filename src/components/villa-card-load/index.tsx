import style from './villa-load.module.css'

export const VillaCardLoad = () => {
  return (
    <div
      className={style.container}
    >
      <div className={style.image_cnt}>
      </div>
      <div className={style.detail}>
        <div className={style.detail_name}></div>
        <div className={style.detail_address}></div>
        <div className={style.detail_price}>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}