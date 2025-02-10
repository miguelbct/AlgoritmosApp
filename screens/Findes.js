import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput, ScrollView, SafeAreaView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';
import { Table, Row, Rows } from 'react-native-table-component';
const colorScheme = 'dark';
const CustomCheckbox = ({ label, isChecked, onToggle }) => (
  <Pressable onPress={onToggle} style={styles.checkboxContainer}>
    <View style={[styles.checkbox, isChecked && styles.checkboxChecked]} />
    <Text style={styles.label}>{label}</Text>
  </Pressable>
);

const CSVReader = () => {
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [selectedHeaders, setSelectedHeaders] = useState([]);
  const [filter, setFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const pickCSVFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'text/csv',
        copyToCacheDirectory: true,
      });

      if (result.canceled) {
        return;
      }

      const fileContent = await FileSystem.readAsStringAsync(result.assets[0].uri);

      Papa.parse(fileContent, {
        header: true,
        skipEmptyLines: true,
        complete: (parsedData) => {
          const data = parsedData.data;
          const keys = parsedData.meta.fields;
          setHeaders(keys);
          setSelectedHeaders(keys); 
          setCsvData(data);
          setFilteredData(data);
          setErrorMessage(null);
        },
        error: () => {
          setErrorMessage('There was a problem processing the csv file.');
        },
      });
    } catch {
      setErrorMessage('Cant read the file.');
    }
  };

  const handleFilterChange = (text) => {
    setFilter(text);

    const filtered = csvData.filter((row) =>
      Object.values(row).some((value) =>
        value?.toString().toLowerCase().includes(text.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const toggleHeaderSelection = (header) => {
    setSelectedHeaders((prev) =>
      prev.includes(header) ? prev.filter((h) => h !== header) : [...prev, header]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header(colorScheme)}>
              <Text style={styles.title(colorScheme)}>CSV Reader</Text>
            </View>
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

        {csvData.length > 0 && (
          <>
            {/* Filtro */}
            <TextInput
              style={styles.filterInput}
              placeholder="Filter content..."
              value={filter}
              onChangeText={handleFilterChange}
            />

            {/* Selección de columnas */}
            <View style={styles.checkboxList}>
              {headers.map((header) => (
                <CustomCheckbox
                  key={header}
                  label={header}
                  isChecked={selectedHeaders.includes(header)}
                  onToggle={() => toggleHeaderSelection(header)}
                />
              ))}
            </View>

            {/* Tabla */}
            <ScrollView horizontal style={styles.tableContainer}>
              <Table style={styles.table}>
                {/* Encabezado */}
                <Row
                  data={selectedHeaders}
                  style={styles.header}
                  textStyle={styles.headerText}
                  widthArr={Array(selectedHeaders.length).fill(120)} // Ancho fijo para columnas
                />
                {/* Filas */}
                <Rows
                  data={filteredData.map((row) =>
                    selectedHeaders.map((header) => row[header]?.toString() || '')
                  )}
                  style={styles.row}
                  textStyle={styles.rowText}
                  widthArr={Array(selectedHeaders.length).fill(120)} // Ancho fijo para columnas
                />
              </Table>
            </ScrollView>
          </>
        )}
      </ScrollView>
      <Pressable style={styles.button} onPress={pickCSVFile}>
        <Text style={styles.buttonText}>Select File</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117', // Fondo oscuro estilo GitHub
    padding: 30,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  errorText: {
    color: '#f85149', // Rojo estilo GitHub para errores
    marginBottom: 10,
    textAlign: 'center',
  },
  filterInput: {
    borderWidth: 1,
    borderColor: '#30363d', // Borde gris oscuro
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 20,
    backgroundColor: '#161b22', // Fondo oscuro del input
    fontSize: 16,
    color: '#c9d1d9', // Texto claro
  },
  checkboxList: {
    marginBottom: 20,
    marginLeft: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#30363d', // Gris oscuro
    backgroundColor: '#161b22', // Fondo oscuro
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#1f6feb', // Azul estilo GitHub
  },
  label: {
    fontSize: 16,
    color: '#c9d1d9', // Texto claro
  },
  tableContainer: {
    margin: 20,
    borderWidth: 1,
    borderColor: '#30363d', // Gris oscuro
    borderRadius: 8,
    overflow: 'hidden',
  },
  table: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  header: {
    height: 50,
    backgroundColor: '#161b22', // Fondo oscuro del encabezado
  },
  headerText: {
    fontWeight: 'bold',
    color: '#c9d1d9', // Texto claro
    textAlign: 'center',
    fontSize: 14,
    padding: 10,
  },
  row: {
    backgroundColor: '#0d1117', // Fondo oscuro de las filas
    borderBottomWidth: 1,
    borderColor: '#30363d',
  },
  rowText: {
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 14,
    color: '#c9d1d9', // Texto claro
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#1f6feb', // Azul estilo GitHub
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#1158c7', // Azul oscuro para bordes
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#c9d1d9', // Texto claro
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  header: (colorScheme) => ({
    marginBottom: 30,
    alignItems: 'center',
  }),
  title: (colorScheme) => ({
    fontSize: 24,
    fontWeight: 'bold',
    color: colorScheme === 'dark' ? '#c9d1d9' : '#24292f',
    marginBottom: 20,
  }),
});


export default CSVReader;
