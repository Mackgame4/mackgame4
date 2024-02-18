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
import PdfProgBar from './components/pdfProgBar';

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
  skillText: {
    fontSize: 10,
    fontFamily: 'JetBrainsMono-Regular',
    color: colorVars.textColor,
    letterSpacing: 0.5,
    textDecoration: 'none',
    marginTop: 5
  },
  progbarText: {
    fontSize: 9,
    fontFamily: 'JetBrainsMono-Regular',
    color: colorVars.textColor,
    letterSpacing: 0.5,
    textDecoration: 'none',
    marginTop: 5
  },
  footerText: {
    fontSize: 7,
    fontFamily: 'JetBrainsMono-Regular',
    color: colorVars.accentColor,
    letterSpacing: 1,
    textDecoration: 'none',
    textAlign: 'center'
  }
});

const Doc = () => (
  <Document>
    <Page size="A4" orientation="portrait" style={styles.body}>
      <DocHeader />
      <View style={styles.content}>
        <View style={styles.leftContainer}>
        </View>
        <View style={styles.rightContainer}>
          {/** Contacts Section */}
          <Text style={styles.title}>{ln('contact')}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
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
          {/** Skills Section */}
          <Text style={[styles.title, { marginTop: 20 }]}>SKILLS</Text>
          {Config.skills.map((skill, index) => (
            <Text key={index} style={styles.skillText}>{skill}</Text>
          ))}
          {/** Tools Section */}
          <Text style={[styles.title, { marginTop: 20 }]}>TOOLS</Text>
          {Config.tools.map((tool, index) => (
            <View key={index} style={{ textAlign: 'right', alignItems: 'flex-end' }}>
              <Text style={styles.progbarText}>{tool.name}</Text>
              <PdfProgBar value={tool.level} width={150} height={4} isOutlined />
            </View>
          ))}
          {/** Education Section */}
          <Text style={[styles.title, { marginTop: 20 }]}>EDUCATION</Text>
          {Config.education.map((edu, index) => (
            <View key={index} style={{ marginTop: 5, textAlign: 'right', alignItems: 'flex-end' }}>
              <Text style={styles.footerText}>{edu.date}</Text>
              <Text style={styles.text}>{edu.title}</Text>
              <Text style={styles.footerText}>{edu.institution} - {edu.location}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default Doc;