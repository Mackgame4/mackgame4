import {
  Document,
  View,
  //Text,
  //Image,
  Page,
  StyleSheet,
} from '@react-pdf/renderer';

import { colorVars } from './Utils';

import DocHeader from './components/docHeader';

const styles = StyleSheet.create({
  body: {
    padding: 5,
    paddingHorizontal: 45,
    backgroundColor: colorVars.backgroudColor,
  },
  title: {
    fontSize: 45,
    textAlign: 'left',
    fontFamily: 'CaviarDreams-Bold',
    fontWeight: 'bold',
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  // Containers
  header: {
    width: '100%',
    height: 210,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row'
  },
  leftContainer: {
    backgroundColor: colorVars.accentColor,
    width: '50%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rightContainer: {
    backgroundColor: colorVars.primaryColor,
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  avatarContainer: {
    width: 160,
    height: 160,
    borderRadius: '50%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorVars.primaryColor,
  },
  avatarImage: {
    width: 158,
    height: 158,
    borderRadius: '50%',
  },
});

const Doc = () => (
  <Document>
    <Page size="A4" orientation="portrait" style={styles.body}>
      <DocHeader />
      <View style={styles.content}>
        <View style={styles.leftContainer}>
        </View>
        <View style={styles.rightContainer}>
        </View>
      </View>
    </Page>
  </Document>
);

export default Doc;