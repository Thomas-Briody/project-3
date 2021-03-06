import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

export default function Companies() {
  const [companies, updateCompanies] = useState([])
  const [search, updateSearch] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('/api/companies')
      updateCompanies(data)
    }
    fetchData()
  }, [])

  // ! updating ratings 
  function rater(company) {
    const newRating = company.ratings.map(item => Number(item.rating))
    const numOfRatings = newRating.length
    if (newRating.length === 0) {
      return console.log('hello')
    } else {
      return ratingCalc(newRating, numOfRatings)
    }
  }

  function filterCompanies() {
    return companies.filter(company => {
      if (search.length === 0) { return company }
      else {
        return company.company.toLowerCase().includes(search.toLowerCase())
      }
    })
  }
  console.log(companies)
  function ratingCalc(newRating, numOfRatings) {
    const ratingTotal = newRating.reduce((accumulator, currentValue) => accumulator + currentValue)
    const actualRating = ratingTotal / numOfRatings
    return actualRating.toFixed(1)
  }

  return <section className="all-companies">
    <div className='columns m-3 is-centered is-mobile' >
      <div className='column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop'>
        <input className="input is-rounded is-medium is-focused is-centered" onChange={(event) => updateSearch(event.target.value)} type="text" placeholder="Search companies..."></input>
      </div>
    </div>
    <h1 className="title is-2 has-text-danger" style={{
      fontWeight: 800,
      letterSpacing: -1
    }}>Companies</h1>
    <div className="columns is-multiline">
      {filterCompanies().map((company, index) => {
        return <div key={index} className="column is-one-quarter-widescreen is-one-third-desktop is-half-tablet" key={company._id}>
          <Link to={`/company/${company._id}`}>
            <div className="card grow">
              <div className="card-content companies-cards">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={company.logo} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{company.company}</p>
                    <p className="subtitle is-6">{company.website}</p>
                  </div>

                </div>
                <strong>About: </strong>{company.about.length >= 130
                  ? company.about.slice(0, 130) + '...'
                  : company.about}
                {<br></br>}
                <strong>Rating: </strong>{rater(company)}
              </div>
            </div>
          </Link>
        </div>
      })}</div>

  </section>
}