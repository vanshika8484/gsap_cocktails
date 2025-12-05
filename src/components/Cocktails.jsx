import React from 'react'
import {cocktailLists,mockTailLists} from '../constants/index'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Cocktails = () => {
    useGSAP(()=>{
        const parallaxTimeline = gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#cocktails",
		start: "top 30%",
		end: "bottom 80%",
		scrub: true,
	 },
	})
	parallaxTimeline.to("#c-left-leaf", { x: -80,y:100 })
	.to("#c-right-leaf", { y: 100 ,x:100})
	
})
  return (
    <section id="cocktails" className='noisy'>
       <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf"/>
       <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf"/>

       <div className='list'>
        <div className='popular'>
            <h1>Most Popular cocktails:</h1>
            <ul>
                {cocktailLists.map(({name,country,detail,price})=>(
                    <li key={name}>
                        <div className='md:me-28'>
<h3>{name}</h3>
<p>{country}|{detail}</p>
                        </div>
                         <span>- {price}</span>
                    </li>
                ))}
            </ul>
        </div>

         <div className='loved'>
            <h1>Most Loved cocktails:</h1>
            <ul>
                {mockTailLists.map(({name,country,detail,price})=>(
                    <li key={name}>
                        <div className='md:me-28'>
<h3>{name}</h3>
<p>{country}|{detail}</p>
                        </div>
                         <span>- {price}</span>
                    </li>
                ))}
            </ul>
        </div>
       
       </div>
    </section>
  )
}

export default Cocktails