import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';
import { User } from '../types';

const { width } = Dimensions.get('window');

interface HomeScreenProps {
  navigation: any;
}

const mockUser: User = {
  id: '1',
  firstName: 'Ahmet',
  lastName: 'Yılmaz',
  email: 'ahmet@example.com',
  phone: '+90 555 123 4567',
  title: 'Senior Software Developer',
  profileImage: 'https://via.placeholder.com/150',
  about: 'Deneyimli yazılım geliştirici olarak 5 yıldır çeşitli projelerde çalışıyorum. React Native, Node.js ve Python konularında uzmanım.',
  projects: [],
  education: [],
  experience: [],
  skills: [],
  contact: {
    email: 'ahmet@example.com',
    phone: '+90 555 123 4567',
  },
  viewCount: 156,
  likeCount: 23,
};

const categories = [
  { id: 'projects', title: 'projects', icon: 'folder-outline' },
  { id: 'education', title: 'education', icon: 'school-outline' },
  { id: 'about', title: 'about', icon: 'person-outline' },
  { id: 'experience', title: 'experience', icon: 'briefcase-outline' },
  { id: 'skills', title: 'skills', icon: 'star-outline' },
  { id: 'contact', title: 'contact', icon: 'mail-outline' },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { theme, getTranslation } = useAppContext();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [slideAnim] = useState(new Animated.Value(0));

  const handleCategoryPress = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      // Close category
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setSelectedCategory(null);
      });
    } else {
      // Open category
      setSelectedCategory(categoryId);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const renderCategoryContent = () => {
    if (!selectedCategory) return null;

    const content = {
      about: (
        <View style={[styles.categoryContent, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.categoryTitle, { color: theme.colors.text }]}>
            {getTranslation('about', { code: 'tr', name: 'Türkçe' })}
          </Text>
          <Text style={[styles.categoryText, { color: theme.colors.textSecondary }]}>
            {mockUser.about}
          </Text>
        </View>
      ),
      projects: (
        <View style={[styles.categoryContent, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.categoryTitle, { color: theme.colors.text }]}>
            {getTranslation('projects', { code: 'tr', name: 'Türkçe' })}
          </Text>
          <Text style={[styles.categoryText, { color: theme.colors.textSecondary }]}>
            Henüz proje eklenmemiş.
          </Text>
        </View>
      ),
      education: (
        <View style={[styles.categoryContent, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.categoryTitle, { color: theme.colors.text }]}>
            {getTranslation('education', { code: 'tr', name: 'Türkçe' })}
          </Text>
          <Text style={[styles.categoryText, { color: theme.colors.textSecondary }]}>
            Eğitim bilgileri henüz eklenmemiş.
          </Text>
        </View>
      ),
      experience: (
        <View style={[styles.categoryContent, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.categoryTitle, { color: theme.colors.text }]}>
            {getTranslation('experience', { code: 'tr', name: 'Türkçe' })}
          </Text>
          <Text style={[styles.categoryText, { color: theme.colors.textSecondary }]}>
            Deneyim bilgileri henüz eklenmemiş.
          </Text>
        </View>
      ),
      skills: (
        <View style={[styles.categoryContent, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.categoryTitle, { color: theme.colors.text }]}>
            {getTranslation('skills', { code: 'tr', name: 'Türkçe' })}
          </Text>
          <Text style={[styles.categoryText, { color: theme.colors.textSecondary }]}>
            Beceri bilgileri henüz eklenmemiş.
          </Text>
        </View>
      ),
      contact: (
        <View style={[styles.categoryContent, { backgroundColor: theme.colors.surface }]}>
          <Text style={[styles.categoryTitle, { color: theme.colors.text }]}>
            {getTranslation('contact', { code: 'tr', name: 'Türkçe' })}
          </Text>
          <Text style={[styles.categoryText, { color: theme.colors.textSecondary }]}>
            E-posta: {mockUser.contact.email}{'\n'}
            Telefon: {mockUser.contact.phone}
          </Text>
        </View>
      ),
    };

    return content[selectedCategory as keyof typeof content];
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: theme.colors.surface }]}>
        <Ionicons name="search" size={20} color={theme.colors.textSecondary} />
        <Text style={[styles.searchPlaceholder, { color: theme.colors.textSecondary }]}>
          {getTranslation('search', { code: 'tr', name: 'Türkçe' })}
        </Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: mockUser.profileImage }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={[styles.userTitle, { color: theme.colors.textSecondary }]}>
              {mockUser.title}
            </Text>
            <Text style={[styles.userName, { color: theme.colors.text }]}>
              {mockUser.firstName} {mockUser.lastName}
            </Text>
          </View>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <TouchableOpacity style={styles.statButton}>
            <Ionicons name="eye-outline" size={20} color={theme.colors.primary} />
            <Text style={[styles.statText, { color: theme.colors.text }]}>
              {mockUser.viewCount} {getTranslation('views', { code: 'tr', name: 'Türkçe' })}
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.statButton}>
            <Ionicons name="heart-outline" size={20} color={theme.colors.primary} />
            <Text style={[styles.statText, { color: theme.colors.text }]}>
              {mockUser.likeCount} {getTranslation('likes', { code: 'tr', name: 'Türkçe' })}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories Grid */}
      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              { 
                backgroundColor: theme.colors.surface,
                borderColor: selectedCategory === category.id ? theme.colors.primary : theme.colors.border,
              }
            ]}
            onPress={() => handleCategoryPress(category.id)}
          >
            <Ionicons 
              name={category.icon as any} 
              size={24} 
              color={selectedCategory === category.id ? theme.colors.primary : theme.colors.textSecondary} 
            />
            <Text style={[
              styles.categoryButtonText, 
              { 
                color: selectedCategory === category.id ? theme.colors.primary : theme.colors.textSecondary 
              }
            ]}>
              {getTranslation(category.title, { code: 'tr', name: 'Türkçe' })}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Category Content */}
      <Animated.View
        style={[
          styles.categoryContentContainer,
          {
            opacity: slideAnim,
            transform: [{
              translateY: slideAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            }],
          },
        ]}
      >
        {renderCategoryContent()}
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 16,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  searchPlaceholder: {
    marginLeft: 8,
    fontSize: 16,
  },
  profileSection: {
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  userTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  statText: {
    marginLeft: 8,
    fontSize: 14,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  categoryButton: {
    width: (width - 48) / 3,
    height: 80,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryButtonText: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
  },
  categoryContentContainer: {
    padding: 16,
  },
  categoryContent: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
