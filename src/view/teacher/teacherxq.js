
import React, { useState, useEffect } from 'react'
import { getTeacher } from '../../http/http'






function Teacherxq(props) {
    let { id, isloca, setloca } = props
    // console.log(isloca)
    let [data, setData] = useState([])
    // console.log(props)


    useEffect(async () => {
        let list = await getTeacher("desc", "sort", "2", "0")
        setData(list.data)
    }, [])
    // console.log(info)
    const ids = (data) => {
        let arr = data.reduce((init, item) => {
            // console.log(typeof item.id);
            init.push(item)
            return init
        }, [])
        // console.log(arr)
        return arr
    }
    ids(data)
    console.log(data)
    return (
        <div className={isloca ? "tankaung" : "tankuang2"}>
            <span className="remove">
                <span className="close" onClick={() => {
                    setloca(false)
                }}>x</span>
            </span>


            <div>
                {
                    data.map(item => {
                        if (item.id == id) {
                            return (
                                <div key={item.id}>
                                    <div className="photo_tx">
                                        <img src={item.icon}></img>
                                    </div>
                                    <div className="shiji" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                                </div>


                            )
                        } else {


                        }


                    })
                }


            </div>
        </div>


    )
}
export default Teacherxq