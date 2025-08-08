import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

interface SettingsScreenProps {
  navigation: any;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  const { theme, language, toggleTheme, setLanguage, getTranslation } = useAppContext();

  const languages = [
    { code: 'tr', name: 'Türkçe' },
    { code: 'en', name: 'English' },
  ];

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.text }]}>
          {getTranslation('settings', { code: 'tr', name: 'Türkçe' })}
        </Text>
      </View>

      {/* Settings Sections */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Görünüm
        </Text>
        
        {/* Dark Mode Toggle */}
        <View style={[styles.settingItem, { backgroundColor: theme.colors.surface }]}>
          <View style={styles.settingLeft}>
            <Ionicons 
              name={theme.isDark ? "moon" : "sunny"} 
              size={24} 
              color={theme.colors.primary} 
            />
            <View style={styles.settingText}>
              <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
                {getTranslation('darkMode', { code: 'tr', name: 'Türkçe' })}
              </Text>
              <Text style={[styles.settingSubtitle, { color: theme.colors.textSecondary }]}>
                {theme.isDark ? 'Koyu tema aktif' : 'Açık tema aktif'}
              </Text>
            </View>
          </View>
          <Switch
            value={theme.isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
            thumbColor={theme.isDark ? '#FFFFFF' : '#FFFFFF'}
          />
        </View>
      </View>

      {/* Language Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          {getTranslation('language', { code: 'tr', name: 'Türkçe' })}
        </Text>
        
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.code}
            style={[styles.settingItem, { backgroundColor: theme.colors.surface }]}
            onPress={() => setLanguage(lang)}
          >
            <View style={styles.settingLeft}>
              <Ionicons 
                name="language" 
                size={24} 
                color={theme.colors.primary} 
              />
              <View style={styles.settingText}>
                <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
                  {lang.name}
                </Text>
                <Text style={[styles.settingSubtitle, { color: theme.colors.textSecondary }]}>
                  {lang.code === 'tr' ? 'Türkçe' : 'English'}
                </Text>
              </View>
            </View>
            {language.code === lang.code && (
              <Ionicons name="checkmark" size={24} color={theme.colors.primary} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Hesap
        </Text>
        
        <TouchableOpacity 
          style={[styles.settingItem, { backgroundColor: theme.colors.surface }]}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <View style={styles.settingLeft}>
            <Ionicons name="person-outline" size={24} color={theme.colors.primary} />
            <View style={styles.settingText}>
              <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
                {getTranslation('editProfile', { code: 'tr', name: 'Türkçe' })}
              </Text>
              <Text style={[styles.settingSubtitle, { color: theme.colors.textSecondary }]}>
                Profil bilgilerinizi düzenleyin
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color={theme.colors.textSecondary} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.settingItem, { backgroundColor: theme.colors.surface }]}
          onPress={() => {
            // Logout logic here
            navigation.navigate('Login');
          }}
        >
          <View style={styles.settingLeft}>
            <Ionicons name="log-out-outline" size={24} color="#FF3B30" />
            <View style={styles.settingText}>
              <Text style={[styles.settingTitle, { color: '#FF3B30' }]}>
                {getTranslation('logout', { code: 'tr', name: 'Türkçe' })}
              </Text>
              <Text style={[styles.settingSubtitle, { color: theme.colors.textSecondary }]}>
                Hesabınızdan çıkış yapın
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={24} color={theme.colors.textSecondary} />
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
          Hakkında
        </Text>
        
        <View style={[styles.settingItem, { backgroundColor: theme.colors.surface }]}>
          <View style={styles.settingLeft}>
            <Ionicons name="information-circle-outline" size={24} color={theme.colors.primary} />
            <View style={styles.settingText}>
              <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
                Versiyon
              </Text>
              <Text style={[styles.settingSubtitle, { color: theme.colors.textSecondary }]}>
                1.0.0
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    marginHorizontal: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 12,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 12,
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingSubtitle: {
    fontSize: 14,
    marginTop: 2,
  },
});
