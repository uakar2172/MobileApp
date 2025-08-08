import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

interface LoginScreenProps {
  navigation: any;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { theme, getTranslation } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }
    
    // Mock login - in real app, you would validate with backend
    if (email === 'test@example.com' && password === 'password') {
      navigation.replace('Main');
    } else {
      Alert.alert('Hata', 'E-posta veya şifre hatalı.');
    }
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Kariyer Planlama
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          Kariyerinizi planlayın ve geliştirin
        </Text>
      </View>

      {/* Login Form */}
      <View style={styles.form}>
        <Text style={[styles.formTitle, { color: theme.colors.text }]}>
          {getTranslation('login', { code: 'tr', name: 'Türkçe' })}
        </Text>

        {/* Email Input */}
        <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
          <Ionicons name="mail-outline" size={20} color={theme.colors.textSecondary} />
          <TextInput
            style={[styles.input, { color: theme.colors.text }]}
            placeholder="E-posta adresiniz"
            placeholderTextColor={theme.colors.textSecondary}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
          <Ionicons name="lock-closed-outline" size={20} color={theme.colors.textSecondary} />
          <TextInput
            style={[styles.input, { color: theme.colors.text }]}
            placeholder="Şifreniz"
            placeholderTextColor={theme.colors.textSecondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons 
              name={showPassword ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color={theme.colors.textSecondary} 
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity 
          style={[styles.loginButton, { backgroundColor: theme.colors.primary }]}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>
            {getTranslation('login', { code: 'tr', name: 'Türkçe' })}
          </Text>
        </TouchableOpacity>

        {/* Demo Credentials */}
        <View style={styles.demoContainer}>
          <Text style={[styles.demoText, { color: theme.colors.textSecondary }]}>
            Demo Giriş:
          </Text>
          <Text style={[styles.demoText, { color: theme.colors.textSecondary }]}>
            E-posta: test@example.com
          </Text>
          <Text style={[styles.demoText, { color: theme.colors.textSecondary }]}>
            Şifre: password
          </Text>
        </View>
      </View>

      {/* Register Link */}
      <View style={styles.registerContainer}>
        <Text style={[styles.registerText, { color: theme.colors.textSecondary }]}>
          Hesabınız yok mu?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={[styles.registerLink, { color: theme.colors.primary }]}>
            {getTranslation('register', { code: 'tr', name: 'Türkçe' })}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  form: {
    marginBottom: 32,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
  loginButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  demoContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  demoText: {
    fontSize: 14,
    marginBottom: 4,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
  },
  registerLink: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
