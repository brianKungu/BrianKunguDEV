import Image from "next/image";
import React, { useState } from "react";
import details from "../../utils/data";
import Tabs from "./Tabs";
import Link from 'next/link'
export default function About() {
  // const [date, setDate] = useState();
  return (
    <section className="hidden about-section sec-padding" id="about">
      <div className="container">
        <div className="section-title">
          <h2>about me</h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="about-img mb-10 md:mb-0">
            <div className="img-box">
              <Image
                src="/images/testimage2.png"
                priority
                width={400}
                height={400}
                alt="my image"
              />
            </div>
          </div>

          <div className="about-text col-span-2 ">
            {details.map((detail, index) => {
              // console.log(detail.education.name);
              const skills = detail.skill.join(" ");
              // setDate(detail.education);
              return (
                <div key={index}>
                  <p>{detail.description}</p>
                  <h3>skills</h3>
                  <div className="skills">
                    <div className="skill-item">{skills}</div>
                  </div>
                  {detail &&
                    detail.education.map((item, index) => {
                      console.log(item.name);
                      return <Tabs date={item.date} school={item.school} course={item.course} key={index} />;
                    })}
                </div>
              );
            })}
            <div className="flex gap-4 flex-wrap items-center text-center md:flex-nowrap">
            <Link href="#" passHref className="btn w-full">download CV</Link>
            <Link href="#" passHref className="btn w-full">contact me</Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
