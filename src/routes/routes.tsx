import React from 'react'
import { Route, Routes } from 'react-router-dom'

import LandingPage from '../pages/Landing'
import Login from '../pages/Login'
import Register from '../pages/Register'

// It's only for test
import BottomSection from '../pages/Landing/BottomSection'
import { RedirectToRegister } from '../pages/RedirectToRegister'
import { DevRegisterPersonalInformation } from '../pages/DevRegisterPersonalInformation'
import { LayoutRegister } from '../layouts/LayoutRegister'
import { DevRegisterProfessionalInformation } from '../pages/DevRegisterProfessionalInformation'
import { DevRegisterEmploymentPreferences } from '../pages/DevRegisterEmploymentPreferences'
import { DevRegisterProjectsAndExperience } from '../pages/DevRegisterProjectsAndExperience'
import { HireRegisterTypeService } from '../pages/HireRegisterTypeService'
import { HireRegisterCompanyData } from '../pages/HireRegisterCompanyData'
import { DevProfile } from '../pages/DevProfile'
import { FeedHirer } from '../pages/FeedHirer'

function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/app" element={<BottomSection />} />
      <Route path="/redirecttoregister" element={<RedirectToRegister />} />
      <Route path="/devprofile" element={<DevProfile />} />
      <Route path="/devregister" element={<LayoutRegister />}>
        <Route
          path="personalinformation"
          element={<DevRegisterPersonalInformation />}
        />
        <Route
          path="professionalinformation"
          element={<DevRegisterProfessionalInformation />}
        />
        <Route
          path="employmentpreferences"
          element={<DevRegisterEmploymentPreferences />}
        />
        <Route
          path="projectsandexperience"
          element={<DevRegisterProjectsAndExperience />}
        />
      </Route>
      <Route path="/hireregister" element={<LayoutRegister />}>
        <Route path="typeservice" element={<HireRegisterTypeService />} />
        <Route path="companydata" element={<HireRegisterCompanyData />} />
      </Route>
      <Route path="/feedhirer" element={<FeedHirer />} />
    </Routes>
  )
}

export default GlobalRoutes
