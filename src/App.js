import React from 'react'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import CountryItem from './components/CountryItem'
import countries from './countries'
import './App.css'

const App = () => {
  return (
    <div className="flex-row">
      <LeftSidebar />
      <RightSidebar>
        <ul>
          {countries.map((country) => (
            <CountryItem
              key={country.capitol}
              capitol={country.capitol}
              name={country.name}
            />
          ))}
        </ul>
      </RightSidebar>
    </div>
  )
}

export default App
