import React from "react";
import "./styles.css";
import herionHep from "./img/herionHelp.mp4";
import russell from "./img/russellbrand.jpg"
export default function App() {
  return (
    <div className="App">
      <div className="Header">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            {" "}
            <source src={herionHep} type="video/mp4" />
            does not support
          </video>
          <h1 className="bg-video__text">RoyalMindsRehab</h1>
        </div>{" "}

<div className="info">
<span>Name:<input/></span>

<span>Email:<input/></span>
</div>


      </div>{" "}
      <div className="main">
        <div className="main__paragraph">
          <h2 className="header-H2">Title here</h2>
          <p className="main__paragraph--item">
            If you’re in Baltimore… right now you’re in danger.
          </p>
          <p className="main__paragraph--item">
            Heroin is killing everyone. Its literally become an epidemic with no
            cure in site.{" "}
          </p>
          <p className="main__paragraph--item">
            But we believe we may have the answer. You see while traditional
            treatment providers use methadone and forms of therapy that may not
            work for you. We have decided on doing something different. We feel
            that heroin is a drug that allows you to escape reality and we that
            is the real issue. So we use a revolutionary approach to help you
            create a reality worth living in. This approach is a bit different
            but for Baltimore we felt like something different needed to be
            created.
          </p>
          <p className="main__paragraph--item">
            Here at Royal Minds we understand the crippling pain your under. We
            understand this has become a life and death situation. We also
            understand that you may have tried traditional treatment in the past
            and nothing has worked. That why we have created an alternate
            approach that we are confident could work for you if you do the
            work.
          </p>
          <p className="main__paragraph--item">
            Heroin is more toxic than ever, but less teenagers find it ‘risky’.
          </p>
          <p className="main__paragraph--item">
            Here’s just a sample of the inside information you’ll discover in
            this newly designed treatment for substance abuse:
          </p>
          <p className="main__paragraph--item">
            Now due to the high demand of our program we are selective about who
            enters our treatment program. So we require people to go under a
            screening processing to determine how serious you are about changing
            your life. So please if you tried a bunch of programs and nothing
            has worked for you try our program.{" "}
          </p>
          <p className="main__paragraph--item">We also accept all insurance.</p>
        </div>
      </div>{" "}
      <div className="qoutes">
<div className="qoutes-items">
        <p className="qoutes-p">
          {" "}
          “The priority of any addict is to anaesthetize the pain of living to
          ease the passage of day with some purchased relief.”{" "}
          <span>-Russell Brand</span>

        </p>
        <img className="qoutes-img" src={russell} alt="" srcset=""/>
        </div>


        <div className="qoutes-items">
        <p className="qoutes-p">
          {" "}
          “It did not feel like something that was going to take over my life
          and destroy it. It felt like a subtle flower instead of a manipulative
          demon. That’s the mystery of heroin.” <span>– Corey Feldman</span>
        </p>
        <img className="qoutes-img" src={russell} alt="" srcset=""/>
</div>
<div className="qoutes-items">
        <p className="qoutes-p">
          {" "}
          “If you can quit for a day, you can quit for a lifetime.”{" "}
          <span>– Benjamin Alire Saenz</span>
        </p>
        <img className="qoutes-img" src={russell} alt="" srcset=""/>
        </div>
      </div>
      <div className="main-two">
      <div className="info info-alt">
<span>Name:<input/></span>

<span>Email:<input/></span>
</div>
        <h2 className="header-H2">Title here</h2>

        <ul className="list">
          <li className="list-item">
            Tired of being treated like a junkie (Tired of doing the Baltimore
            lean) and feel like there is more to life
          </li>
          <li className="list-item">
            Learn a secret technique to help you deal with your stress in and
            anxiety in just seconds.
          </li>

          <li className="list-item">
            Develop the necessary skills to overcome the desire and urge to want
            to use drugs again
          </li>
          <li className="list-item">
            Create a new community of friends and family members that will
            support you through your journey
          </li>
          <li className="list-item">
            Learn how to develop a bullet proof relapse prevention plan so when
            you leave our program you learn how to structure a drug free
            lifestyle.
          </li>
          <li className="list-item">
            Eliminate the empty feeling your experiencing on a daily basis and
            start to feel alive again.
          </li>

          <li className="list-item">
            Sick and Tired of constantly being on probation and worried about
            testing clean.
          </li>
          <li className="list-item">
            Learn a simple method for reprogramming the subconscious mind.
          </li>
          <li className="list-item">
            Learn the 5 effective rules you need to follow to have a successful
            recovery
          </li>
          <li className="list-item">
            The one thing you must give up if you want to stop waking up sick
            from using heroin
          </li>
        </ul>
      </div>
      <div className="main__paragraph">
        <h2 className="header-H2">Title here</h2>
        <p className="main__paragraph--item">
          …and you get much more! You’ll learn what techniques you should use –
          which mindset to create to help you stop being addicted.{" "}
        </p>
        <p className="main__paragraph--item">
          You’ll be able to start your new life now. Best of all you want be
          treated more than a second-class citizen we treat you like a human and
          not an addict which is why our results with our clients has been so
          amazing. So call now to see if you would be a good fit for this
          program.{" "}
        </p>
        <p className="main__paragraph--item">Sincerely,</p>
        <p className="main__paragraph--item">RoyalMindsRehab</p>
      </div>
    </div>
  );
}
