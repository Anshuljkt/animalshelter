import React from "react"
import NavBar from "./NavBar.js"

const Home = () => {
    return (
      <div className="App">
        <NavBar weight={300} home={false} />

        <div class='sectionsText' id='topSection'>
          <h1 className='headerAbout'>Our mission</h1>
          <section>
            <p>Our mission is to advocate for animals by providing safety until home placement of those in our care.
                We promote spay and neuter programs as a means to control pet overpopulation and
            </p>
          </section>
        </div>


        <div class='sectionsText'>
          <h1 className='headerAbout'>Wish list</h1>
          <section>
            <p>We always have a long shopping list at the Shelter! Donated items can be dropped off at the shelter located
                at 56 Broad Street in Quincy during adoption hours and left with any of our Volunteers or shipped directly 
                to us from Amazon. Check out our wish list!
            </p>
          </section>
        </div>


        <div class='sectionsText'>
          <h1 className='headerAbout'>Volunteer</h1>
          <section>
            <p>Volunteers are the backbone of our efforts to improve the lives of the animals in our care. You can also become
                a guardian angel and sponsor a cage or kennel at the shelter. You can become a member of the QAS or help
                out with one of our available positions at QAS.
            </p>
          </section>
        </div>


        <div class='sectionsText' id='bottomSection'>
          <h1 className='headerAbout'>Adoption Hours</h1>
          <section class='schedule'>
            <p><span>Tuesday -</span> 6 - 9 PM</p>
            <p><span>Tuesday -</span> 6 - 8 PM</p>
            <p><span>Tuesday -</span> 10 AM - 4 PM</p>
          </section>
        </div>
    </div>
    )
}

export default Home