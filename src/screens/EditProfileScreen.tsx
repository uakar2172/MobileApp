import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useAppContext } from '../context/AppContext';

interface EditProfileScreenProps {
  navigation: any;
}

const mockUser = {
  firstName: 'Ahmet',
  lastName: 'Yılmaz',
  email: 'ahmet@example.com',
  phone: '+90 555 123 4567',
  title: 'Senior Software Developer',
  about: 'Deneyimli yazılım geliştirici olarak 5 yıldır çeşitli projelerde çalışıyorum. React Native, Node.js ve Python konularında uzmanım.',
  profileImage: 'https://via.placeholder.com/150',
};

export const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ navigation }) => {
  const { theme, getTranslation } = useAppContext();
  const [firstName, setFirstName] = useState(mockUser.firstName);
  const [lastName, setLastName] = useState(mockUser.lastName);
  const [email, setEmail] = useState(mockUser.email);
  const [phone, setPhone] = useState(mockUser.phone);
  const [title, setTitle] = useState(mockUser.title);
  const [about, setAbout] = useState(mockUser.about);
  const [profileImage, setProfileImage] = useState(mockUser.profileImage);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    if (!firstName || !lastName || !email || !phone || !title) {
      Alert.alert('Hata', 'Lütfen tüm zorunlu alanları doldurun.');
      return;
    }

    // Mock save - in real app, you would send to backend
    Alert.alert(
      'Başarılı', 
      'Profil bilgileriniz güncellendi.',
      [
        {
          text: 'Tamam',
          onPress: () => navigation.goBack()
        }
      ]
    );
  };

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
          {getTranslation('editProfile', { code: 'tr', name: 'Türkçe' })}
        </Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={[styles.saveButton, { color: theme.colors.primary }]}>
            {getTranslation('save', { code: 'tr', name: 'Türkçe' })}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Profile Image Section */}
      <View style={styles.imageSection}>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
            <View style={[styles.imageOverlay, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
              <Ionicons name="camera" size={24} color="#FFFFFF" />
            </View>
          </View>
        </TouchableOpacity>
        <Text style={[styles.imageText, { color: theme.colors.textSecondary }]}>
          Profil fotoğrafını değiştirmek için dokunun
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        {/* First Name */}
        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: theme.colors.text }]}>
            Ad *
          </Text>
          <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
            <TextInput
              style={[styles.input, { color: theme.colors.text }]}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="Adınız"
              placeholderTextColor={theme.colors.textSecondary}
            />
          </View>
        </View>

        {/* Last Name */}
        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: theme.colors.text }]}>
            Soyad *
          </Text>
          <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
            <TextInput
              style={[styles.input, { color: theme.colors.text }]}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Soyadınız"
              placeholderTextColor={theme.colors.textSecondary}
            />
          </View>
        </View>

        {/* Title */}
        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: theme.colors.text }]}>
            Ünvan *
          </Text>
          <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
            <TextInput
              style={[styles.input, { color: theme.colors.text }]}
              value={title}
              onChangeText={setTitle}
              placeholder="Ünvanınız"
              placeholderTextColor={theme.colors.textSecondary}
            />
          </View>
        </View>

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: theme.colors.text }]}>
            E-posta *
          </Text>
          <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
            <TextInput
              style={[styles.input, { color: theme.colors.text }]}
              value={email}
              onChangeText={setEmail}
              placeholder="E-posta adresiniz"
              placeholderTextColor={theme.colors.textSecondary}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Phone */}
        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: theme.colors.text }]}>
            Telefon *
          </Text>
          <View style={[styles.inputContainer, { backgroundColor: theme.colors.surface }]}>
            <TextInput
              style={[styles.input, { color: theme.colors.text }]}
              value={phone}
              onChangeText={setPhone}
              placeholder="Telefon numaranız"
              placeholderTextColor={theme.colors.textSecondary}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        {/* About */}
        <View style={styles.inputGroup}>
          <Text style={[styles.inputLabel, { color: theme.colors.text }]}>
            Hakkımda
          </Text>
          <View style={[styles.textAreaContainer, { backgroundColor: theme.colors.surface }]}>
            <TextInput
              style={[styles.textArea, { color: theme.colors.text }]}
              value={about}
              onChangeText={setAbout}
              placeholder="Kendiniz hakkında bilgi verin"
              placeholderTextColor={theme.colors.textSecondary}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
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
    justifyContent: 'space-between',
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
    flex: 1,
  },
  saveButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageSection: {
    alignItems: 'center',
    padding: 24,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    fontSize: 14,
    textAlign: 'center',
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    fontSize: 16,
  },
  textAreaContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 100,
  },
  textArea: {
    fontSize: 16,
    flex: 1,
  },
});
