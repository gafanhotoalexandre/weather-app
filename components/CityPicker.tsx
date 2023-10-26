'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Country, City } from 'country-state-city'
import Select from 'react-select'
import { GlobeHemisphereWest } from '@phosphor-icons/react'
// import {} from '@heroicons/react'

type countryOption = {
  value: {
    latitude: string
    longitude: string
    isoCode: string
  }
  label: string
} | null

type cityOption = {
  value: {
    latitude: string
    longitude: string
    countryCode: string
    name: string
    stateCode: string
  }
  label: string
} | null

const COUNTRY_OPTIONS = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}))

export function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState<countryOption>(null)
  const [selectedCity, setSelectedCity] = useState<cityOption>(null)

  const router = useRouter()

  function handleSelectedCountry(option: countryOption) {
    setSelectedCountry(option)
    setSelectedCity(null)
  }

  function handleSelectedCity(option: cityOption) {
    setSelectedCity(option)
    // router.push(
    //   `/location/${option?.value.latitude}/${option?.value.longitude}`,
    // )
  }
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-white/80">
          <GlobeHemisphereWest className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          className="text-black"
          value={selectedCountry}
          onChange={handleSelectedCountry}
          options={COUNTRY_OPTIONS}
          placeholder="Selecione"
        />
      </div>

      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-white/80">
            <GlobeHemisphereWest className="h-5 w-5 text-white" />
            <label htmlFor="country">City</label>
          </div>
          <Select
            className="text-black"
            value={selectedCity}
            onChange={handleSelectedCity}
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode,
            )?.map((state) => ({
              value: {
                latitude: state.latitude!,
                longitude: state.longitude!,
                countryCode: state.countryCode,
                name: state.name,
                stateCode: state.stateCode,
              },
              label: state.name,
            }))}
            placeholder="Selecione"
          />
        </div>
      )}
    </div>
  )
}
