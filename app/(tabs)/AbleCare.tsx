import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// ===================================================================
// ComStateProps.tsx
// Single-file React Native component containing:
//  1) Landing Screen (AbleCare intro)
//  2) Login Screen (Welcome Back)
// Navigation between them is handled with local component state
// (no external navigation library needed).
// ===================================================================

type Screen = 'landing' | 'login';

const COLORS = {
  primaryGreen: '#4FA88A',
  primaryBlue: '#5B8DD9',
  gradientStart: '#4FA88A',
  gradientEnd: '#5B8DD9',
  textDark: '#1F2937',
  textGray: '#6B7280',
  textBlue: '#5B8DD9',
  bgLight: '#EAF6F1',
  white: '#FFFFFF',
  borderGray: '#E0E6E4',
  iconBg: '#E4F3EC',
  footerDark: '#11151A',
};

export default function ComStateProps() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // -----------------------------------------------------------------
  // LANDING SCREEN
  // -----------------------------------------------------------------
  const renderLanding = () => (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoShieldSmall}>
            <Text style={styles.logoShieldSmallText}>🛡️</Text>
          </View>
          <Text style={styles.headerTitle}>AbleCare</Text>
        </View>

        {/* Hero Image Section */}
        <View style={styles.heroWrapper}>
          <ImageBackground
            source={{
              uri:
                'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=60',
            }}
            style={styles.heroImage}
            imageStyle={styles.heroImageStyle}
          >
            <View style={styles.heroOverlay} />

            {/* Shield Logo */}
            <View style={styles.shieldLogoContainer}>
              <View style={styles.shieldOuter}>
                <View style={styles.shieldInner}>
                  <Text style={styles.heartIcon}>💚</Text>
                  <Text style={styles.crossIcon}>➕</Text>
                </View>
                <Text style={styles.handsIcon}>🤲</Text>
              </View>
            </View>

            <Text style={styles.heroTitle}>AbleCare</Text>
            <Text style={styles.heroSubtitle}>
              Smart care support for elderly and{'\n'}PWD
            </Text>
            <Text style={styles.heroDescription}>
              AI-powered first aid guidance, personalized clinic
              recommendations, and rapid emergency assistance for
              caregivers.
            </Text>
          </ImageBackground>
        </View>

        {/* Feature Cards */}
        <View style={styles.featuresContainer}>
          <FeatureCard icon="♡" label="AI First Aid Guidance" />
          <FeatureCard icon="🩺" label="Clinic Recommendation" />
          <FeatureCard icon="!" label="Emergency Alert System" />
          <FeatureCard icon="👥" label="Caregiver Support Platform" />
        </View>

        {/* CTA Buttons */}
        <View style={styles.ctaContainer}>
          <TouchableOpacity
            style={styles.getStartedButton}
            activeOpacity={0.85}
            onPress={() => setScreen('login')}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            activeOpacity={0.85}
            onPress={() => setScreen('login')}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <StatCard value="24/7" label="AI Support" />
          <StatCard value="500+" label="Providers" />
          <StatCard value="<2min" label="Response" />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2026 AbleCare. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  // -----------------------------------------------------------------
  // LOGIN SCREEN
  // -----------------------------------------------------------------
  const renderLogin = () => (
    <SafeAreaView style={styles.loginSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bgLight} />
      <ScrollView
        style={styles.loginScrollContainer}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.loginScrollContent}
      >
        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => setScreen('landing')}
        >
          <Text style={styles.backArrow}>←</Text>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        {/* Shield Logo */}
        <View style={styles.loginLogoContainer}>
          <View style={styles.loginShieldOuter}>
            <View style={styles.loginShieldInner}>
              <Text style={styles.loginCrossIcon}>➕</Text>
            </View>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.welcomeTitle}>Welcome Back</Text>
        <Text style={styles.welcomeSubtitle}>
          Login to continue using AbleCare
        </Text>

        {/* Form Card */}
        <View style={styles.formCard}>
          {/* Email */}
          <Text style={styles.inputLabel}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>✉️</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#A0AAB4"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password */}
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A0AAB4"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              activeOpacity={0.7}
            >
              <Text style={styles.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            activeOpacity={0.7}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginSubmitButton}
            activeOpacity={0.85}
            onPress={() => {
              // Handle login logic here
              console.log('Login pressed', { email, password });
            }}
          >
            <Text style={styles.loginSubmitText}>Login</Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  return screen === 'landing' ? renderLanding() : renderLogin();
}

// ===================================================================
// Reusable Sub-Components
// ===================================================================

function FeatureCard({ icon, label }: { icon: string; label: string }) {
  return (
    <View style={styles.featureCard}>
      <View style={styles.featureIconBox}>
        <Text style={styles.featureIconText}>{icon}</Text>
      </View>
      <Text style={styles.featureLabel}>{label}</Text>
    </View>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

// ===================================================================
// Styles
// ===================================================================

const styles = StyleSheet.create({
  // ---------- Shared ----------
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: COLORS.bgLight,
  },

  // ---------- Landing: Header ----------
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  logoShieldSmall: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  logoShieldSmallText: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textDark,
  },

  // ---------- Landing: Hero ----------
  heroWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  heroImage: {
    width: '100%',
    minHeight: 560,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  heroImageStyle: {
    borderRadius: 20,
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(20, 30, 28, 0.45)',
    borderRadius: 20,
  },
  shieldLogoContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  shieldOuter: {
    width: 130,
    height: 145,
    backgroundColor: 'rgba(160, 220, 195, 0.95)',
    borderRadius: 24,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ rotate: '0deg' }],
  },
  shieldInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#8FD0B5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    fontSize: 26,
    position: 'absolute',
  },
  crossIcon: {
    fontSize: 14,
    color: COLORS.white,
  },
  handsIcon: {
    fontSize: 28,
    marginTop: 6,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.white,
    marginBottom: 14,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#8FE0C4',
    textAlign: 'center',
    marginBottom: 18,
    lineHeight: 26,
  },
  heroDescription: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 21,
    paddingHorizontal: 8,
  },

  // ---------- Landing: Feature Cards ----------
  featuresContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  featureIconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.iconBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  featureIconText: {
    fontSize: 20,
    color: COLORS.primaryGreen,
  },
  featureLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textDark,
  },

  // ---------- Landing: CTA Buttons ----------
  ctaContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  getStartedButton: {
    backgroundColor: COLORS.primaryGreen,
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: 'center',
    marginBottom: 14,
    // simulated gradient via background color blend
    shadowColor: COLORS.primaryGreen,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  getStartedText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '700',
  },
  loginButton: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: COLORS.primaryBlue,
  },
  loginButtonText: {
    color: COLORS.primaryBlue,
    fontSize: 17,
    fontWeight: '700',
  },

  // ---------- Landing: Stats ----------
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 18,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.primaryBlue,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: COLORS.textGray,
    fontWeight: '500',
  },

  // ---------- Landing: Footer ----------
  footer: {
    backgroundColor: COLORS.footerDark,
    paddingVertical: 18,
    alignItems: 'center',
  },
  footerText: {
    color: '#B8C0C8',
    fontSize: 12,
  },

  // ===================================================================
  // LOGIN SCREEN STYLES
  // ===================================================================
  loginSafeArea: {
    flex: 1,
    backgroundColor: COLORS.bgLight,
  },
  loginScrollContainer: {
    flex: 1,
  },
  loginScrollContent: {
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 40,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  backArrow: {
    fontSize: 20,
    color: COLORS.textDark,
    marginRight: 8,
  },
  backText: {
    fontSize: 17,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  loginLogoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 18,
  },
  loginShieldOuter: {
    width: 95,
    height: 105,
    backgroundColor: '#A9DFC7',
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  loginShieldInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#7FD4F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCrossIcon: {
    fontSize: 18,
    color: COLORS.white,
  },
  welcomeTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.textDark,
    textAlign: 'center',
    marginBottom: 6,
  },
  welcomeSubtitle: {
    fontSize: 15,
    color: COLORS.primaryBlue,
    textAlign: 'center',
    marginBottom: 28,
    fontWeight: '500',
  },
  formCard: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    padding: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  inputLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 8,
    marginTop: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: '#D9E6E1',
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 18,
    backgroundColor: '#FAFEFC',
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: COLORS.textDark,
  },
  eyeIcon: {
    fontSize: 16,
    marginLeft: 8,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 22,
    marginTop: -6,
  },
  forgotPasswordText: {
    color: COLORS.primaryBlue,
    fontSize: 14,
    fontWeight: '600',
  },
  loginSubmitButton: {
    backgroundColor: COLORS.primaryGreen,
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: COLORS.primaryGreen,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  loginSubmitText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '700',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: COLORS.textDark,
  },
  registerLink: {
    fontSize: 14,
    color: COLORS.primaryBlue,
    fontWeight: '700',
  },
});