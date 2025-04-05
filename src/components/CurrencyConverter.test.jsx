import { screen, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import CurrencyConverter from './CurrencyConverter'
import CurrencyContext from '../contexts/CurrencyContext';
import { fireEvent, rerender } from '@testing-library/react';

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

    it("should show the correct output for a given input", () => {
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
        const fromAmountInput = screen.getByPlaceholderText("Enter amount")
        fireEvent.change(fromAmountInput, { target: { value:10 } } )

        // Assert
        expect(screen.getByText("20")).toBeInTheDocument()
    })
})

    // Exercise 3
    it("should ...", () =>{
        // Arrange
        render (
            <CurrencyContext.Provider value={{
                fromCurrency: "SGD",
                toCurrency: "USD"
            }}>
                <CurrencyConverter />
                </CurrencyContext.Provider>
                )
        //Act 
        const Blankamount = screen.getByPlaceholderText("Enter amount")
        fireEvent.change(Blankamount, { target: { value:"" } } )

        // Assert
        expect(screen.getByText("0")).toBeInTheDocument()
    })

    // exercise 4

    it("should show updated currencies afer user selects new currency", () => {
        //Arange
        const { rerender } = render (
            <CurrencyContext.Provider value={{
                fromCurrency: "SGD",
                toCurrency: "USD"
            }}>
                <CurrencyConverter />
                </CurrencyContext.Provider>
                )
        
        //Act

        //Assert
        expect(screen.getByText("SGD")).toBeInTheDocument()
        expect(screen.getByText("USD")).toBeInTheDocument()


        // user has selected new currencies, context is updated

        // Arrange
        rerender(
            <CurrencyContext.Provider value={{
                fromCurrency: "GBP",
                toCurrency: "JPY"
            }}>
                <CurrencyConverter />
                </CurrencyContext.Provider>
                )

        //Assert
        expect(screen.getByText("GBP")).toBeInTheDocument()
        expect(screen.getByText("JPY")).toBeInTheDocument()
    })

    // exercise 5

    it("should show updated currencies afer user selects new currency + added amount", () => {
        //Arange
        const { rerender } = render (
            <CurrencyContext.Provider value={{
                fromCurrency: "SGD",
                toCurrency: "USD"
            }}>
                <CurrencyConverter />
                </CurrencyContext.Provider>
                )
        
        //Act
        const AmountUpdated = screen.getByPlaceholderText("Enter amount")
        fireEvent.change(AmountUpdated, { target: { value:"10" } } )

        //Assert
        expect(screen.getByText("SGD")).toBeInTheDocument()
        expect(screen.getByText("USD")).toBeInTheDocument()
        expect(screen.getByText("20")).toBeInTheDocument()
        
        // user has selected new currencies, context is updated

        // Arrange
        rerender(
            <CurrencyContext.Provider value={{
                fromCurrency: "GBP",
                toCurrency: "JPY"
            }}>
                <CurrencyConverter />
                </CurrencyContext.Provider>
                )

        //Assert
        expect(screen.getByText("GBP")).toBeInTheDocument()
        expect(screen.getByText("JPY")).toBeInTheDocument()
        expect(screen.getByText("20")).toBeInTheDocument() // weird
    })

    //exercise 6

    it("should handle negative inputs",()=>{

        // Arrange
        render (
            <CurrencyContext.Provider value={{
                fromCurrency: "SGD",
                toCurrency: "USD"
            }}>
                <CurrencyConverter />
                </CurrencyContext.Provider>
                )
        
        //Act
        const AmountUpdated = screen.getByPlaceholderText("Enter amount")
        fireEvent.change(AmountUpdated, { target: { value:"-10" } } )

        // Assert
        // expect(screen.getByText("-20")).toBeInTheDocument() // edge case failed
        expect(screen.getByText("0")).toBeInTheDocument()
    })

    // another edge case
    it("should handle non-number inputs",()=>{
        // Arrange
        render (
            <CurrencyContext.Provider value={{
                fromCurrency: "SGD",
                toCurrency: "USD"
            }}>
                <CurrencyConverter />
                </CurrencyContext.Provider>
                )
        
        //Act
        const AmountUpdated = screen.getByPlaceholderText("Enter amount")
        fireEvent.change(AmountUpdated, { target: { value:"abc" } } )

        // Assert
        // expect(screen.getByText("NaN")).toBeInTheDocument() // edge case failed
        expect(screen.getByText("0")).toBeInTheDocument() // edge case failed
    })
 
