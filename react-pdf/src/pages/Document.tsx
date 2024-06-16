import { Document, View, Text, Page, StyleSheet } from '@react-pdf/renderer';
import { colorVars, ln, getLocale } from '@/lib/utils';
import { Config } from '@/lib/config';

import DocHeader from '@/components/document/docHeader';
import DocContacts from '@/components/document/docContacts';
import DocSkills from '@/components/document/docSkills';
import DocLanguages from '@/components/document/docLanguages';
import DocEdu from '@/components/document/docEdu';
import DocExperience from '@/components/document/docExperience';

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
    width: '55%',
    alignItems: 'flex-start',
  },
  rightContainer: {
    width: '45%',
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
  }
});

const Doc = () => (
  <Document>
    <Page size="A4" orientation="portrait" style={styles.body}>
      <DocHeader />
      <View style={styles.content}>
        <View style={styles.leftContainer}>
          {/** Summarize Section */}
          <Text style={styles.text}>{ln('hello')} {Config.firstName}{Config.userName ? ` (${Config.userName}) ` : ' '}{Config.lastName}. {getLocale().summarize}</Text>
          {/** WorkExperience Section */}
          <Text style={[styles.title, { marginTop: 20 }]}>{ln('experienceText')}</Text>
          <DocExperience />
        </View>
        <View style={styles.rightContainer}>
          {/** Contacts Section */}
          <Text style={styles.title}>{ln('contacts')}</Text>
          <DocContacts />
          {/** Skills Section */}
          <Text style={[styles.title, { marginTop: 20 }]}>{ln('skillsText')}</Text>
          <DocSkills />
          {/** Education Section */}
          <Text style={[styles.title, { marginTop: 20 }]}>{ln('educationText')}</Text>
          <DocEdu />
          {/** Languages Section */}
          <Text style={[styles.title, { marginTop: 20 }]}>{ln('languagesText')}</Text>
          <DocLanguages />
        </View>
      </View>
    </Page>
  </Document>
);

export default Doc;