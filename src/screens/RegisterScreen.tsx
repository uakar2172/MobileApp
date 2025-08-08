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

interface RegisterScreenProps {
  navigation: any;
}

export const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const { theme, getTranslation } = useAppContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler eşleşmiyor.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Hata', 'Şifre en az 6 karakter olmalıdır.');
      return;
    }

    // Mock registration - in real app, you would send to backend
    Alert.alert(
      'Başarılı', 
      'Kayıt işlemi başarılı! Giriş yapabilirsiniz.',
      [
        {
          text: 'Tamam',
          onPress: () => navigation.navigate('Login')
        }
      ]
    );
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      contentContainerStyle={styles.contentContainer}
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
        <Text style={[styles.title, { color: theme.colors.text }]}>
          {getTranslation('register', { code: 'tr', name: 'Türkçe' })}
        </Text>
      </View>

      {/* Register Form */}
      <View style={styles.form}>
        {/* First Name Input */}
        <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
          <Ionicons name="person-outline" size={20} color={theme.colors.textSecondary} />
          <TextInput
            style={[styles.input, { color: theme.colors.text }]}
            placeholder="Adınız"
            placeholderTextColor={theme.colors.textSecondary}
            value={firstName}
            onChangeText={setFirstName}
            autoCapitalize="words"
          />
        </View>

        {/* Last Name Input */}
        <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
          <Ionicons name="person-outline" size={20} color={theme.colors.textSecondary} />
          <TextInput
            style={[styles.input, { color: theme.colors.text }]}
            placeholder="Soyadınız"
            placeholderTextColor={theme.colors.textSecondary}
            value={lastName}
            onChangeText={setLastName}
            autoCapitalize="words"
          />
        </View>

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

        {/* Phone Input */}
        <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
          <Ionicons name="call-outline" size={20} color={theme.colors.textSecondary} />
          <TextInput
            style={[styles.input, { color: theme.colors.text }]}
            placeholder="Telefon numaranız"
            placeholderTextColor={theme.colors.textSecondary}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
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

        {/* Confirm Password Input */}
        <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
          <Ionicons name="lock-closed-outline" size={20} color={theme.colors.textSecondary} />
          <TextInput
            style={[styles.input, { color: theme.colors.text }]}
            placeholder="Şifrenizi tekrar girin"
            placeholderTextColor={theme.colors.textSecondary}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons 
              name={showConfirmPassword ? "eye-off-outline" : "eye-outline"} 
              size={20} 
              color={theme.colors.textSecondary} 
            />
          </TouchableOpacity>
        </View>

        {/* Register Button */}
        <TouchableOpacity 
          style={[styles.registerButton, { backgroundColor: theme.colors.primary }]}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>
            {getTranslation('register', { code: 'tr', name: 'Türkçe' })}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Link */}
      <View style={styles.loginContainer}>
        <Text style={[styles.loginText, { color: theme.colors.textSecondary }]}>
          Zaten hesabınız var mı?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.loginLink, { color: theme.colors.primary }]}>
            {getTranslation('login', { code: 'tr', name: 'Türkçe' })}
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
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    marginBottom: 32,
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
  registerButton: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
  },
  loginLink: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
