import React, { useRef, useState } from 'react';

enum Operator {
    add, subtract, multiply, divide, equal
}

export const useCalculator = () => {
    const [backNum, setBackNum] = useState('0');
    const [num, setNum] = useState('0');

    const lastOperation = useRef<Operator>(Operator.add)

    const clearResult = () => {
        setNum('0');
        setBackNum('0')
    }

    const addNumber = (textNumber: string) => {
        
        let newNumber =  num+textNumber
        //validate only one dot
        if (num.includes('.') && textNumber === '.') return;
        //validate
        if( (num === '0' && textNumber!=='.') ) newNumber = textNumber;
        // if( (num === '0' && textNumber==='-') ) return;

        setNum(newNumber)
    }

    const addMinus = () => {
        if (num.includes('-')) setNum(num.replace('-', ''));
        else setNum('-'+num);
    }

    const deleteNumber = () => {
        let newNumber = num.slice(0, -1);
        if (newNumber === '-' || newNumber==='' || newNumber==='-0') newNumber = '0'
        setNum(newNumber);
    }

    const btnAdd = (textNumber: string) => {
        changeBackNumber();
        lastOperation.current = Operator.add;
    }

    const btnSubtract = () => {
        changeBackNumber();
        lastOperation.current = Operator.subtract;
    }

    const btnMultiply = () => {
        changeBackNumber();
        lastOperation.current = Operator.multiply;
    }
    const btnDivide = () => {
        changeBackNumber();
        lastOperation.current = Operator.divide;
    }
    const btnResult = () => {
        changeBackNumber();
        lastOperation.current = Operator.equal;
    }

    const changeBackNumber = ()=> {
        num.endsWith('.') && setNum( num.slice(0, -1) );
        calculate();
        setNum('0')
    }

    const calculate = () => {
        const backNumber = Number(backNum);
        const lastNumber = Number(num);

        console.log(backNumber);
        console.log(lastNumber);
        console.log(lastOperation.current);

        switch (lastOperation.current) {
            case Operator.add:
                setBackNum(`${ backNumber + lastNumber }`)
                break;
            case Operator.subtract:
                setBackNum(`${ backNumber - lastNumber }`)
                break;
            case Operator.multiply:
                setBackNum(`${ backNumber * lastNumber }`)
                break;
            case Operator.divide:
                setBackNum(`${ backNumber / lastNumber }`)
                break;
            case Operator.equal:
                setBackNum(`${ lastNumber }`)
                break;
            default:
                break;
        }
    }

    return {
        backNum,
        num,
        clearResult,
        addMinus,
        deleteNumber,
        addNumber,
        btnAdd,
        btnSubtract,
        btnMultiply,
        btnDivide,
        btnResult,
    }
}