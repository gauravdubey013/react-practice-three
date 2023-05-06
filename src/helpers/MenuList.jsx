import chokka from '../assets/chokka.gif'
import MakkiDiRoti from '../assets/MakkiDiRoti.jpeg'
import misalPav from '../assets/misalPav.jpeg'
import rogan from '../assets/roganJosh.jpeg'
import papayaKhar from '../assets/papayaKhar.jpeg'

export const MenuList = [
    {
        name : "Misal Pav",
        image: misalPav,
        price: "15 rs"
    },
    {
        name : "Makki di Roti and Sarson da Saag",
        image: MakkiDiRoti,
        price: "50 rs"
    },
    {
        name : "Rogan Josh",
        image: rogan,
        price: "60 rs"
    },
    {
        name : "Papaya Khar",
        image: papayaKhar,
        price: "30 rs"
    },
    {
        name : "Litti Chokha",
        image: chokka,
        price: "25 rs"
    },
    {
        name : "Pongal",
        image: <pongal/>,
        price: "25 rs"
    }
]

export const pongal = () => {
    return(
        <img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/sweet-pongal-chakkara-pongal-500x500.jpg" alt="Pongal " />
    )
}