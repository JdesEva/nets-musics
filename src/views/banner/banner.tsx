import React, { useState, useRef } from 'react'
import { useMount, useUnmount } from 'react-use'
import './banner.scss'
import http from '../../api/api'
import server from '../../api/server'
import { __Debounce } from 'src/utils/utils'

const Banner: React.FC<any> = props => {
  const [bannerList, setBannerList] = useState<Array<any>>([]) // banner数据
  const [classTag, setClassTag] = useState<Array<number>>([4, 1, 2, 3, 4]) // class索引
  const timeRef = useRef<any>() // 定时器

  useMount(() => {
    _getBannerList()
    setTimeout(() => {
      console.log('准备开始动画')
      toggleAnimate()
    }, 2000)
  })

  useUnmount(() => {
    console.log('组件注销', timeRef)
    if (timeRef.current) clearInterval(timeRef.current)
    timeRef.current = null
  })

  /**
   * 获取banner数据
   */
  let _getBannerList = (): void => {
    http.get(server.banner).then((res: any) => {
      console.log(res)
      if (res.data.code === 200) {
        setBannerList(res.data.banners)
        console.log(res.data.banners.length)
        setClassTag(c => {
          let v = new Array(res.data.banners.length - 5).fill(4)
          return [...c, ...v]
        })
      }
    })
  }

  /**
   * 获取正确的class类名
   * @param index {number} - [index = 1] 活跃索引
   */
  const currentClassName = (index: number): string => {
    var base = `tr${classTag[index]}`
    if (classTag[index] === 2) base += ' active'
    return base
  }

  /**
   * 计算类名索引
   * @param r {boolean} - [r = false] 向左向右 默认向左
   */
  const initTimer = (r: boolean = false) => {
    if (timeRef.current) clearInterval(timeRef.current)
    let t = setInterval(() => {
      transformClassTag(r)
    }, 4000)
    timeRef.current = t
  }

  /**
   * 切换class函数
   * @param r {boolean} - [r = false] 向左向右 默认向左
   */
  const transformClassTag = (r: boolean = false): void => {
    setClassTag(c => {
      if (r) {
        let v = c.splice(0, 1)
        return [...c, ...v]
      } else {
        let v = c.splice(-1)
        return [...v, ...c]
      }
    })
  }

  /**
   * 跳转
   * @param index {number} 索引
   * 方法
   * 首先获取 idx 与 index 的差值，代表移位值
   * 当 index > idx 时候，应该右移，反之左移。只需要截取然后拼接即可
   */
  const transformTo = (index: number): void => {
    // console.log(index)
    setClassTag(c => {
      let idx = c.findIndex(v => v === 2)
      if (index >= idx) {
        let v = c.splice(idx - index)
        return [...v, ...c]
      } else {
        let v = c.splice(0, idx - index)
        return [...c, ...v]
      }
    })
  }

  /**
   * 返回防抖函数包装之后的函数
   * @returns {Function} debounceFunction
   */
  let deFn = __Debounce((index: number) => transformTo(index), 300)

  /**
   * 动画开关
   * @param isOpen {boolean} - [isOpen = false] 是否开启动画
   */
  const toggleAnimate = (isOpen: boolean = true): void => {
    if (isOpen) {
      initTimer()
    } else {
      console.log(isOpen, timeRef.current)
      if (timeRef.current) clearInterval(timeRef.current)
      timeRef.current = null
    }
  }

  return (
    <div
      className="nets-banner"
      onMouseEnter={() => toggleAnimate(false)}
      onMouseLeave={() => toggleAnimate()}
    >
      <div className="nets-banner-img-preload">
        {bannerList.map((row: any, idx: number) => {
          return <img key={idx} src={row.imageUrl} alt="" />
        })}
      </div>
      <div className="banner-wrapper">
        <span onClick={() => transformClassTag(true)}>
          <i className="iconfont icon-left"></i>
        </span>
        {bannerList.map((item: any, index: number) => {
          return (
            <div key={index} className={currentClassName(index)}>
              <img src={item.imageUrl} alt="" />
            </div>
          )
        })}
        <span onClick={() => transformClassTag()}>
          <i className="iconfont icon-right"></i>
        </span>
      </div>
      <div className="banner-navgaitor">
        {classTag.map((item: any, index: number) => {
          return (
            <span
              onMouseEnter={() => deFn(index)}
              className={item === 2 ? 'active' : ''}
              key={index}
            >
              &nbsp;
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Banner
