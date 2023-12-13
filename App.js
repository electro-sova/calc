import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  const handleNumberInput = (value) => {
    if (displayValue === '0') {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleOperatorInput = (operator) => {
    if (operator === '=') {
      const result = calculateResult();
      setDisplayValue(result);
      setOperator(null);
      setFirstValue('');
    } else if (operator === 'C') {
      setDisplayValue('0');
      setOperator(null);
      setFirstValue('');
    } else if (operator === 'DEL') {
      setDisplayValue(displayValue.slice(0, -1));
    } else if (operator === 'x²') {
      setDisplayValue(Math.pow(parseFloat(displayValue), 2).toString());
      setOperator(null);
      setFirstValue('');
    } else {
      setOperator(operator);
      setFirstValue(displayValue);
      setDisplayValue('0');
    }
  };

  const calculateResult = () => {
    const a = parseFloat(firstValue);
    const b = parseFloat(displayValue);

    switch (operator) {
      case '+':
        return (a + b).toString();
      case '-':
        return (a - b).toString();
      case '×':
        return (a * b).toString();
      case '÷':
        if (b === 0) {
          return 'Error';
        } else {
          return (a / b).toString();
        }
      default:
        return displayValue;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{displayValue}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleOperatorInput('C')}
          >
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleOperatorInput('DEL')}
          >
            <Text style={styles.buttonText}>DEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleOperatorInput('x²')}
          >
            <Text style={styles.buttonText}>x²</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonOperator, styles.buttonDivider]}
            onPress={() => handleOperatorInput('÷')}
          >
            <Text style={styles.buttonText}>÷</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleNumberInput('7')}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleNumberInput('8')}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleNumberInput('9')}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOperator}
            onPress={() => handleOperatorInput('×')}
          >
            <Text style={styles.buttonText}>×</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleNumberInput('4')}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleNumberInput('5')}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleNumberInput('6')}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOperator}
            onPress={() => handleOperatorInput('-')}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleNumberInput('1')}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleNumberInput('2')}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonNumber}
            onPress={() => handleNumberInput('3')}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonOperator}
            onPress={() => handleOperatorInput('+')}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.buttonNumber, styles.buttonZero]}
          onPress={() => handleNumberInput('0')}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNumber}
          onPress={() => handleNumberInput('.')}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonEqual}
          onPress={() => handleOperatorInput('=')}
        >
          <Text style={[styles.buttonText, styles.equalButtonText]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 24,
  },
  display: {
    fontSize: 32,
  },
  buttonContainer: {
    flex: 2,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
    justifyContent: 'space-between',
  },
  buttonNumber: {
    flex: 1,
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginHorizontal: 6,
    paddingVertical: 20,
  },
  buttonOperator: {
    flex: 1,
    backgroundColor: '#FF9800',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginHorizontal: 6,
    paddingVertical: 20,
  },
  buttonEqual: {
    flex: 1,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginHorizontal: 6,
    paddingVertical: 20,
  },
  buttonZero: {
    flex: 2,
  },
  buttonDivider: {
    fontSize: 15,
  },
  buttonText: {
    fontSize: 24,
  },
  equalButtonText: {
    color: '#fff',
  },
});

export default Calculator;