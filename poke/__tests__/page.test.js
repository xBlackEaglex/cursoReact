import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
import '@testing-library/jest-dom'

describe('page', () => {
    describe('COmponent', () => {
        it('se renderiza', () => {
            render(
                <Page pokemones={[]} />
            )
            const paragraph = screen.getByText('pokemones')
            expect(paragraph).toBeInTheDocument()
        })
    })
    describe('getData', () => {
    })
})