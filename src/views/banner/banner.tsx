import React, { useEffect, useState } from 'react'
import './banner.scss'
import http from '../../api/api'
import server from '../../api/server'

const Banner: React.FC<any> = props => {
  const [bannerList, setBannerList] = useState<Array<any>>([]) // banner数据
  const [showList, setShowList] = useState<Array<any>>([]) // 当前渲染的banner

  useEffect(() => {
    _getBannerList()
  }, [])

  /**
   * 获取banner数据
   */
  const _getBannerList = (): void => {
    http.get(server.banner).then((res: any) => {
      console.log(res)
      if (res.data.code === 200) {
        setShowList(res.data.banners.slice(0, 3)) // 获取前三个作为当前显示的内容
        setBannerList(res.data.banners)
      }
    })
  }

  /**
   * 获取对应的图片数据
   * @param index {number} - [index = 0] 图片索引
   */
  //   const _currentIndex = (index: number = 0): any => {

  //     if (index > bannerList.length - 1) index = 0
  //     if (index < 0) index = bannerList.length - 1
  //     return bannerList.find((row: any, idx: number) => idx === index)
  //   }

  return (
    <div className="nets-banner">
      <div className="nets-banner-img-preload">
        {bannerList.map((row: any) => {
          return <img key={row.encodeId} src={row.imageUrl} alt="" />
        })}
      </div>
      <div className="banner-wrapper">
        {showList.map((item: any, index: number) => {
          return (
            <div
              key={item.encodeId}
              className={index % 2 !== 0 ? 'active' : ''}
            >
              <img src={item.imageUrl} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Banner
