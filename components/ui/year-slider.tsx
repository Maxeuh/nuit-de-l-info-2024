'use client'

import { useState } from 'react'
import { Slider } from "@/components/ui/slider"

export default function YearSlider() {
  const [year, setYear] = useState(2023)

  const handleYearChange = (value: number[]) => {
    setYear(value[0])
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Slider
        defaultValue={[2024]}
        max={2024}
        min={1900}
        step={1}
        onValueChange={handleYearChange}
        className="mb-4"
      />
      <div className="text-center text-2xl font-bold">
        Année : {year}
      </div>
    </div>
  )
}

