import React, { useEffect, useState } from 'react'
import './banner.scss'
import http from '../../api/api'
import server from '../../api/server'

const Banner: React.FC<any> = props => {
  const [bannerList, setBannerList] = useState<Array<any>>([]) // banner数据
  const [beginFlag, setBeginFlag] = useState<boolean>(false)
  const [classTag, setClassTag] = useState<Array<number>>([1, 2, 3, 4]) // class索引
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null) //计时器

  useEffect(() => {
    _getBannerList()
    let t = setTimeout(() => {
      console.log('准备开始动画', beginFlag)
      setBeginFlag(true)
      initTimer()
    }, 2000)

    return () => {
      console.log('will unmount')
      clearTimeout(t)
      if (timer) clearInterval(timer)
      setTimer(null)
    }
  }, [beginFlag, initTimer, timer])

  /**
   * 获取banner数据
   */
  const _getBannerList = (): void => {
    http.get(server.banner).then((res: any) => {
      console.log(res)
      if (res.data.code === 200) setBannerList(res.data.banners)
    })
  }

  /**
   * 调整当前数据顺序
   * @param r {boolean}  向左向右 默认向左
   */
  const changeBannerListIndex = (r: boolean): void => {
    setBannerList(c => {
      let res: Array<object> = []
      let base: Array<object> = []
      if (!r) {
        let v = c.splice(0, 1)
        res = [...c, ...v]
        base = res.splice(0, 4) // 对base 按照 classTag 排序
      } else {
        let v = c.splice(-1)
        res = [...v, ...c]
        base = res.splice(0, 4)
      }
      // 对 base 按照classTag进行排序 ---- 此处有bug
      if (r) {
        let v = base.splice(0, 1)
        return [...base, ...v, ...res]
      } else {
        let v = base.splice(-1)
        return [...v, ...base, ...res]
      }
    })
  }

  /**
   * 获取正确的class类名
   * @param index - [index = 1] 活跃索引
   */
  const currentClassName = (index: number): string => {
    // console.log(classTag)
    if (!beginFlag) return index === 1 ? 'active' : ''
    var base = `tr${classTag[index]}`
    if (classTag[index] === 3) base += ' active'
    return base
  }

  /**
   * 计算类名索引
   * @param r {boolean} - [r = false] 向左向右 默认向左
   */
  const initTimer = (r: boolean = false) => {
    if (timer) clearInterval(timer)
    let t = setInterval(() => {
      changeBannerListIndex(r)
      //   console.log(changeBannerListIndex(r))
      setClassTag(c => {
        if (r) {
          let v = c.splice(0, 1)
          return [...c, ...v]
        } else {
          let v = c.splice(-1)
          return [...v, ...c]
        }
      })
    }, 1800)
    setTimer(t)
  }

  return (
    <div className="nets-banner">
      <div className="nets-banner-img-preload">
        {bannerList.map((row: any, idx: number) => {
          return <img key={idx} src={row.imageUrl} alt="" />
        })}
      </div>
      <div className="banner-wrapper">
        {bannerList.slice(0, 3).map((item: any, index: number) => {
          return (
            <div key={index} className={currentClassName(index)}>
              <img src={item.imageUrl} alt="" />
            </div>
          )
        })}
        {bannerList.slice(3, 4).map((row: any, index: number) => {
          return (
            <div key={index} className={currentClassName(3)}>
              <img src={row.imageUrl} alt="" />
            </div>
          )
        })}
      </div>
      <div className="nets-banner-navgaitor">开始动画!</div>
      <div>
        {bannerList.map((row: any, idx: number) => {
          return (
            <img key={idx} width="100" height="40" src={row.imageUrl} alt="" />
          )
        })}
      </div>
    </div>
  )
}

export default Banner
