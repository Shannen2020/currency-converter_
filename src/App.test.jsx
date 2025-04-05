import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
    it('should render correctly', () => {
        // Arrange
        render (<App />)

        // Act
        // no user action involved here

        // Assert
        expect(screen.getByText("Currency Converter")).toBeInTheDocument()

        // Act 

        // Assert

    })
})