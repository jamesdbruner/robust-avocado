import React, { useState } from 'react'
import PropTypes from 'prop-types'

import _get from 'lodash.get'

import Placeholder from 'gatsby-theme-leshen/src/components/Placeholder'
import Typography from 'gatsby-theme-leshen/src/components/Typography'
import Stack from 'gatsby-theme-leshen/src/components/Stack'

import StepsObject from './StepsData'
import Step from 'gatsby-theme-leshen/src/components/MegaForm/Step'
import Dots from 'gatsby-theme-leshen/src/components/MegaForm/Dots'
import LoadingStep from 'gatsby-theme-leshen/src/components/MegaForm/LoadingStep'

import arrow from 'gatsby-theme-leshen/src/components/MegaForm/arrow.svg'
import * as Styled from 'gatsby-theme-leshen/src/components/MegaForm/MegaForm.styles'

import MegaFormSubmissionMessage from '../../../../../sites/forest/src/components/MegaFormSubmissionMessage'

const MegaForm = ({
  guid,
  heading,
  children,
  loadingDelayPerItem: loadingDelayPerItemProp,
}) => {
  const [isLastStep, setIsLastStep] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [activeDot, setActiveDot] = useState(1)
  const [loadingStepValues, setLoadingStepValues] = useState({})

  // Taken from the cuttlefish implementation, this allows us to not
  // require the form to have an email_address field on the last step
  const [stepValues, setStepValues] = useState({
    email_address: `${Date.now()}@fakeclearlink.com`,
  })

  if (!_get(StepsObject, guid))
    return (
      <Placeholder type="error">
        <Typography variant="small">Error:</Typography>
        <Typography>guid {guid} not found</Typography>
        <br />
        <Typography>
          Double check that the correct guid is used as a key in the
          StepsData.jsx file
        </Typography>
      </Placeholder>
    )

  // The number of navigation dots to render and the step data for the given guid in StepsData.jsx
  const { numberOfDots, loadingDelayPerItem, steps } = StepsObject[guid]

  // This allows us to pass in the delay amount per item as a prop but also pass the value from
  // StepsData.jsx if a user only wants to shadow that file to adjust this value
  const delay = loadingDelayPerItemProp || loadingDelayPerItem

  // Title and options for the current step
  // [currentStep - 1] because steps is an array which is 0 indexed
  const { title, options } = steps[currentStep - 1]

  return (
    <Styled.MegaFormWrapper>
      <Stack spacing="lg">
        <Styled.MegaForm>
          <Styled.Arrow src={arrow} right />
          <Styled.Arrow src={arrow} />
          <Styled.HeadingContainer>
            <Styled.Heading variant="h3">{heading}</Styled.Heading>
          </Styled.HeadingContainer>
          <Styled.Container>
            {isLastStep ? (
              <LoadingStep
                loadingStepValues={loadingStepValues}
                loadingDelayPerItem={delay}
              >
                <MegaFormSubmissionMessage />
              </LoadingStep>
            ) : (
              <>
                <Styled.Heading variant="h5">{title}</Styled.Heading>
                <Styled.StepWrapper>
                  <Step
                    key={title}
                    data={options}
                    setCurrentStep={setCurrentStep}
                    setIsLastStep={setIsLastStep}
                    stepValues={stepValues}
                    setStepValues={setStepValues}
                    activeDot={activeDot}
                    setActiveDot={setActiveDot}
                    loadingStepValues={loadingStepValues}
                    setLoadingStepValues={setLoadingStepValues}
                  />
                </Styled.StepWrapper>
              </>
            )}

            <Dots
              numberOfDots={numberOfDots}
              isLastStep={isLastStep}
              activeDot={activeDot}
            />
          </Styled.Container>
        </Styled.MegaForm>
        {children}
      </Stack>
    </Styled.MegaFormWrapper>
  )
}

MegaForm.defaultProps = {
  heading: null,
  loadingDelayPerItem: null,
  // if you use null here, we don't get the default prop of the
  // form `emilySubmit` because you're passing null as the value
  children: null,
}

MegaForm.propTypes = {
  /** Used to make sure the data in StepsData.jsx has the appropriate guid key in the data object otherwise we show our placeholder */
  heading: PropTypes.string,
  /** delay in milliseconds for incrementally loading/displaying each choice */
  loadingDelayPerItem: PropTypes.number,
  children: PropTypes.node,
}

export default MegaForm
