import React from 'react';
import './Home.css';
import stars from '../Assets/stars.png';

import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img11 from '../Assets/img11.jpg'
import img12 from '../Assets/img12.jpg'
import img13 from '../Assets/img13.jpg'
import img32 from '../Assets/img32.png'





function Home() {

  const sellItem = [
    {
       imageUrl: img1,
      itemText: 'Aalmino Chelated Mineral Mixture for Cow, Buffalo, Sheep, Horse & Poultry | Premium Pet Health Supplements for Optimal Livestock Well-Being (5 KG)',
      buttonUrl: '/',
    },
    {
      imageUrl: img2,
      itemText: 'Drools Adult Dry Dog Food Chicken and Egg, 3kg with Free 1.2kg, Total 4.2 kg Pack',
      buttonUrl: '/',
    },
    
    {
      imageUrl: img1,
      itemText: 'Aalmino Chelated Mineral Mixture for Cow, Buffalo, Sheep, Horse & Poultry | Premium Pet Health Supplements for Optimal Livestock Well-Being (5 KG)',
      buttonUrl: '/',
    }
 

  ]
  return (
    <div className='home'> 
      <div className='h-sec1'>
        <div className='h-text-container1'>
          <p className='ht-1'>Your One-Stop Destination for All Things Pet!</p>
          <p className='ht-2'>From buying and selling pets to expert veterinary care, we have everything your pet needs</p>
          

          <div className='h-sec1-con1'>
            <button className='eos'> <p className='h-button-text'>Explore Our Services</p></button>
            <div className='h-sec1-con1-image1'>

            </div>
          </div>
        </div>
        

        <div className='h-text-container2'>
          <div className='h-text-container2-img1'>

          </div>
          <div className='h-text-container2-img2'>

          </div>
        </div>
      </div>

      <div className='h-sec2'>
        <div className='h-sec2-item1'>
          <div className='h-sec2-item1-text1'>
            <p className='hsit1'>
              Sell and Buy Pets
            </p>
            <p className='hsit2'>Find the perfect pet or sell your beloved animal with ease. Browse available pets or list your own.</p>
            <button className='sb'>Start Browsing</button>
            <div className='photu'>
            
            </div>
           
            
              
          </div>
          
          <div className='h-sec2-item1-text2'>

          </div>
        </div>
        <div className='h-sec2-item2'>
          <div className='h-sec2-item2-text1'>
            <div className='h-sec2-item2-text1-image1'>

            </div>
            <div className='h-sec2-item2-text1-image2'>

            </div>
          </div>
          <div className='h-sec2-item2-text2'>
            <p className='h-sec2-item2-text2-text1'>Shop</p>
            <p className='h-sec2-item2-text2-text2'>Discover our range of pet products, from essentials to the latest trends.</p>
            <button className='sp'>Shop Now</button>
          </div>
        </div>
        <div className='h-sec2-item3'>
          <div className='h-sec2-item3-text1'>
            <p className='h-sec2-item3-text1-text1'>Consult a Vet</p>
            <p className='h-sec2-item3-text1-text2'>Book an online consultation or appointment with experienced veterinarians.</p>
          </div>
          <div className='h-sec2-item3-text2'>
            <button className='cn'>Consult Now</button>
            <div className='h-sec2-item3-text2-image1'>

            </div>
          </div>
        </div>
      </div>
       
      <div className='h-sec3'>
        {sellItem.map((item) => (
          <div className='h-sec3-item'>
            <div className='h-sec3-item-image'>
              <img src={item.imageUrl} width='auto' height='100%' alt='image1'></img>
            </div>

            <p className='h-sec3-item-text1'>
              {item.itemText}
            </p>
            <button className='bun'>
              BUY NOW
            </button>
          </div>
        ))}
      </div>
      <br />
      <br />
      <div className='h-sec5'>
        <div className='h-sec5-item1'>
          <div className='h-sec5-item1-text1'>
            <div className='fp'><img src={img32} alt="" /></div><p className='hs5i1t1'>  All your pet needs in one place</p>
          </div>
          <div className='h-sec5-item1-text1'>
            <div className='fp'><img src={img32} alt="" /></div><p className='hs5i1t1'>Access to professional and compassionate vets</p>
          </div>
          <div className='h-sec5-item1-text1'>

          </div>
        </div>
        <div className='h-sec5-item2'>
          <p className='h-text-heading1'>Why Choose PetzzyWeb</p>
        </div>
        <div className='h-sec5-item3'>
          <div className='h-sec5-item1-text1'>
            <p className='hs5i1t1'>Join a community of happy pet owners</p><div className='fp'><img src={img32} alt="" /></div>
          </div>
          <div className='h-sec5-item1-text1'>
            <p className='hs5i1t1'>Shop and sell with confidence</p><div className='fp'><img src={img32} alt="" /></div>
          </div>
        </div>
      </div>

      <div className='h-sec6'>
        <h3 className='h-sec6-heading'>Hear What Our Customers Say</h3>
        <div className='h-sec6-content'>
          <div className='h-sec6-content-item1'>
            <div className='h-sec6-content-item1-c1'>
              <div className='hs6cic1'>
                <p className='customers-name'>
                  Ananya Sharma – Dog Owner
                </p>
                <div className='stars'>
                  <img src={stars} alt='stars' height='100%' />
                </div>
              </div>
              <div className='hs6cic2' 
              >
              </div>
            </div>



            <div className='h-sec6-content-item1-c2'>
              <p className='feedback'>
                "This website is a lifesaver! I found the perfect companion, Max, through PetzzyWeb. The process was easy, I could even consult a vet to ensure Max’s health. Booking appointments, shopping for food, and finding all the accessories Max needs in one place is unbeatable. Highly recommend!"
              </p>
            </div>
          </div>
          <div className='ritik '
          
          >

          </div>
          <div className='h-sec6-content-item1 '>
            <div className='h-sec6-content-item1-c1'>
              <div className='hs6cic1'>
                <p className='customers-name'>
                  Vikram Singh – Pet Lover & Farmer
                </p>
                <div className='stars'>
                  <img src={stars} alt='stars' height='100%' />
                </div>
              </div>
              <div className='hs6cic2 nagar' 
              >
              </div>
            </div>
            <div className='h-sec6-content-item1-c2'>
              <p className='feedback'>
                "Never thought I could find both a puppy and a cow on the same website! The quality of pet food and accessories is top-notch, customer service is excellent. The vet consultation feature helped when I had questions about my new puppy’s health. I’ll definitely be using this platform for all my pet needs."
              </p>
            </div>
          </div>
          <div className='h-sec6-content-item2'>
            <div className='h-sec6-content-item2-image'>
           
            </div>
            <div className='h-sec6-content-item2-text'>
              <div className='h-sec6-content-item1-c1'>
                <div className='hs6cic1'>
                  <p className='customers-name'>
                    Riya Mehta – Bird Enthusiast
                  </p>
                  <div className='stars'>
                    <img src={stars} alt='stars' height='100%' />
                  </div>
                </div>

              </div>
              <div className='h-sec6-content-item1-c2'>
                <p className='feedback'>
                  "I bought a pair of beautiful parrots from PetzzyWeb, and I couldn’t be happier! The seller was very professional, and the transaction was smooth. I love that I can also shop for their food and toys all in one place. Plus, booking a vet consultation online saved me so much hassle when I needed advice on caring for them."
                </p>
              </div>
            </div>
          </div>
          <div className='h-sec6-content-item1 ritik1'>

          </div>
        </div>
      </div>

      <div className='h-sec7'>
        <div className='h-sec7-text-container'>
          <h3 className='h-sec7-text-container-heading'>🐾 Meet Bella: Our Pet of the Month! 🐾</h3>
          <p className='hs7t'>Bella is a sweet and adventurous 2-year-old looking for her forever home! Despite a rough start, she's full of love, curiosity, and playful energy. Bella enjoys chasing toys, bird-watching, and snuggling up with her favorite humans. She's great with people and pets alike!</p>
          <p className='hs7t'>Why Adopt Bella?</p>
          <p className='hs7t'>Age: 2 years</p>
          <p className='hs7t'>Breed: Tabby</p>
          <p className='hs7t'>Personality: Playful, affectionate, and friendly</p>
          <p className='hs7t'>Fully vaccinated and spayed.</p>
          <p className='hs7t'>Come meet Bella at our adoption center and give her the loving home she deserves! ❤️</p>
          <p className='hs7t'>Have a pet to feature? Submit their story for next month!</p>
        </div>
        <div className='h-sec7-image-container'>

        </div>
      </div>

      <br />
      <br />
      <div className='h-sec8-heading'>
        <h3 className='h-sec8-heading-text1'>Pet Care Tips and Advice</h3>
        <p className='h-sec8-heading-text2'>Stay informed with our expert advice on pet care, training, health, and more.</p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='h-sec8'>
        <div className='h-sec8-item1'>
          <img src={img11} alt='img'/>
          <p className='h-sec8-item1-text'>Addressing Common Behavioral Issues in Cows: Expert Tips for Farmers</p>
          <p className='read-more'>read more..</p>
        </div>
        <div className='h-sec8-item1'>
          <img src={img12} alt='img'/>
          <p className='h-sec8-item1-text'>The Ultimate Guide to Pet Nutrition: What Every Pet Owner Needs to Know</p>
          <p className='read-more'>read more..</p>
        </div>
        <div className='h-sec8-item1'>
           <img src={img13} alt='img'/>
          <p className='h-sec8-item1-text'>"The Role of Exercise in Your Pet’s Health: Finding the Right Balance"</p>
          <p className='read-more'>read more..</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='contact-container'>
        <div className='contact-container-heading'>
          <h3 className='contact-container-heading-text'>Get in Touch with us!</h3>
        </div>
        <div className='input container'>
          <label>Email/Phone number</label>
          <br /><br />
          <input type='text' placeholder='Enter Phone Number or Email Id' />
          <br /><br /><br />
          <label>Full Name</label>
          <br /><br />
          <input type='text' placeholder='Enter Your Full Name' />
          <br /><br /><br />
          <button className='submit'>Submit</button>
          

        </div>
      </div>
      <br /><br /><br />

   

    </div>
    
      
       
  )
}

export default Home;