import {
  Document,
  View,
  Text,
  Link,
  Page,
  StyleSheet,
} from '@react-pdf/renderer';

import { colorVars, ln } from './Utils';
import { Config } from './Config';

import DocHeader from './components/docHeader';
import PdfIcon from './components/pdfIcons';

const styles = StyleSheet.create({
  body: {
    padding: 5,
    paddingHorizontal: 45,
    backgroundColor: colorVars.backgroudColor,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  leftContainer: {
    backgroundColor: colorVars.accentColor,
    width: '50%',
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: '50%',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontFamily: 'JetBrainsMono-Bold',
    fontWeight: 'bold',
    color: colorVars.primaryColor,
    letterSpacing: 2,
  },
  text: {
    fontSize: 10,
    fontFamily: 'JetBrainsMono-Regular',
    color: colorVars.textColor,
    letterSpacing: 1,
    textDecoration: 'none',
  },
  link: {
    fontSize: 10,
    fontFamily: 'JetBrainsMono-Regular',
    color: colorVars.textColor,
    letterSpacing: 1,
    textDecoration: 'underline',
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
          <Text style={styles.title}>{ln('contact')}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7 }}>
            <PdfIcon height={12} name="phoneIcon" color={colorVars.primaryColor} isOutlined />
            <Text style={[styles.text, { marginLeft: 5, letterSpacing: 0.5 }]}>{Config.phoneNumber}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <PdfIcon height={12} name="emailIcon" color={colorVars.primaryColor} isOutlined />
            <Text style={[styles.link, { marginLeft: 5 }]}>{Config.email}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <PdfIcon height={12} name="githubIcon" color={colorVars.primaryColor} isOutlined />
            <Link style={[styles.link, { marginLeft: 5 }]} src={Config.githuLink}>@{Config.githubUsername}</Link>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <PdfIcon height={12} name="linkedInIcon" color={colorVars.primaryColor} isOutlined />
            <Link style={[styles.link, { marginLeft: 5 }]} src={Config.linkedInLink}>@{Config.linkedInUsername}</Link>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default Doc;