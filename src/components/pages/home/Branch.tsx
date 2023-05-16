/* eslint-disable @next/next/no-img-element */
import { Branch } from "@/interfaces"
import style from './home.module.css'
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import { slugify } from "@/utils"

export const HomeBranch = ({ branches }: { branches: Branch[] }) => {
  return (
    <div className={style.home_section_item}>
      {
        branches.map((item, i) => (
          <div
            key={item.id}
            className={style.branch_item}
          >
            <img className={style.branch_item_bg} src={item.image?.original_url} alt="" />
            <div
              className={(i % 2 !== 0) ? `${style.branch_cnt} ${style.branch_cnt_re}` : style.branch_cnt}
            >
              <img src={item.image?.original_url} alt="" className={style.branch_cnt_img} />
              <div className={style.branch_detail}>
                <div className={style.branch_detail_head}>
                  <h1 className={style.branch_detail_name}>{item.name}</h1>
                  <span className={style.branch_detail_desc}>{item.content}</span>
                </div>
                <div className={style.branch_detail_bot}>
                  <Link href={`/branches/${slugify(item.name)}&id=${item.id}`} className={style.branch_detail_bot_btn} >
                    Tìm hiểu thêm
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}