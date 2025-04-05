import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import CurrencyConverter from './CurrencyConverter'
import CurrencyContext from '../contexts/CurrencyContext';

describe('CurrencyConverter Component', () => {
    it('should render correctly', () => {
        // Arrange
        render (
        <CurrencyContext.Provider value={{
            fromCurrency: "SGD",
            toCurrency: "USD"
        }}>
            <CurrencyConverter />
            </CurrencyContext.Provider>
            )

        // Act
        // no user action involved here

        // Assert
        expect(screen.getByPlaceholderText("Enter amount")).toBeInTheDocument()
        expect(screen.getByText("SGD")).toBeInTheDocument()
        expect(screen.getByText("USD")).toBeInTheDocument()
        expect(screen.getByText("=")).toBeInTheDocument()
        expect(screen.getByText("0")).toBeInTheDocument()
        // Act 

        // Assert

    })
})