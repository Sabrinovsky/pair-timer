import React from 'react'
import { render, act } from '@testing-library/react'
import Main from './Main'

jest.useFakeTimers()

it('renders welcome message', async () => {
  const subject = render(<Main />)

  expect(setTimeout).toHaveBeenCalledTimes(1)

  act(() => {
    jest.runOnlyPendingTimers()
  })
  expect(subject.getByText('24:59')).toBeVisible()

  act(() => {
    jest.runOnlyPendingTimers()
  })
  expect(subject.getByText('24:58')).toBeVisible()

  subject.debug()
})
