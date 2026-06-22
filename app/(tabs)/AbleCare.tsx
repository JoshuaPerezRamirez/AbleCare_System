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
//  3) Create Account Screen (Join AbleCare as a Caregiver)
//  4) Forgot Password Screen
// Navigation between them is handled with local component state
// (no external navigation library needed).
// ===================================================================

type Screen = 'landing' | 'login' | 'register' | 'forgotPassword';

const COLORS = {
  primaryGreen: '#4FA88A',
  primaryBlue: '#5B8DD9',
  textDark: '#1F2937',
  textGray: '#6B7280',
  bgLight: '#EAF6F1',
  white: '#FFFFFF',
  iconBg: '#E4F3EC',
  footerDark: '#11151A',
  inputBorder: '#D9E6E1',
  inputBg: '#FAFEFC',
};

export default function ComStateProps() {
  const [screen, setScreen] = useState<Screen>('landing');

  // Login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Register state
  const [regFullName, setRegFullName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);

  // Forgot password state
  const [forgotEmail, setForgotEmail] = useState('');

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
          <View style={styles.miniShield}>
            <Text style={styles.miniShieldPlus}>+</Text>
          </View>
          <Text style={styles.headerTitle}>AbleCare</Text>
        </View>

        {/* Hero Image Section */}
        <View style={styles.heroWrapper}>
          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=60',
            }}
            style={styles.heroImage}
            imageStyle={styles.heroImageStyle}
          >
            <View style={styles.heroOverlay} />
            <View style={styles.shieldLogoContainer}>
              <View style={styles.heroShieldOuter}>
                <View style={styles.heroShieldCircle}>
                  <View style={styles.crossV} />
                  <View style={styles.crossH} />
                </View>
              </View>
            </View>
            <Text style={styles.heroTitle}>AbleCare</Text>
            <Text style={styles.heroSubtitle}>
              Smart care support for elderly and{'\n'}PWD
            </Text>
            <Text style={styles.heroDescription}>
              AI-powered first aid guidance, personalized clinic
              recommendations, and rapid emergency assistance for caregivers.
            </Text>
          </ImageBackground>
        </View>

        {/* Feature Cards */}
        <View style={styles.featuresContainer}>
          <FeatureCard iconType="heart" label="AI First Aid Guidance" />
          <FeatureCard iconType="plus" label="Clinic Recommendation" />
          <FeatureCard iconType="alert" label="Emergency Alert System" />
          <FeatureCard iconType="person" label="Caregiver Support Platform" />
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
    <SafeAreaView style={styles.authSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bgLight} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.authScrollContent}
      >
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => setScreen('landing')}
        >
          <BackArrowIcon />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <ShieldLogo />
        </View>

        <Text style={styles.authTitle}>Welcome Back</Text>
        <Text style={styles.authSubtitle}>Login to continue using AbleCare</Text>

        <View style={styles.formCard}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <MailIcon />
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

          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <LockIcon />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A0AAB4"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} activeOpacity={0.7}>
              <EyeIcon visible={showPassword} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            activeOpacity={0.7}
            onPress={() => setScreen('forgotPassword')}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitButton}
            activeOpacity={0.85}
            onPress={() => console.log('Login pressed', { email, password })}
          >
            <Text style={styles.submitButtonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.bottomLinkContainer}>
            <Text style={styles.bottomLinkText}>Don't have an account? </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setScreen('register')}>
              <Text style={styles.bottomLinkAction}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  // -----------------------------------------------------------------
  // CREATE ACCOUNT SCREEN
  // -----------------------------------------------------------------
  const renderRegister = () => (
    <SafeAreaView style={styles.authSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bgLight} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.authScrollContent}
      >
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => setScreen('login')}
        >
          <BackArrowIcon />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <ShieldLogo />
        </View>

        <Text style={styles.authTitle}>Create Account</Text>
        <Text style={styles.authSubtitle}>Join AbleCare as a Caregiver</Text>

        <View style={styles.formCard}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <View style={styles.inputWrapper}>
            <PersonIcon />
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#A0AAB4"
              value={regFullName}
              onChangeText={setRegFullName}
              autoCapitalize="words"
            />
          </View>

          <Text style={styles.inputLabel}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <MailIcon />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#A0AAB4"
              value={regEmail}
              onChangeText={setRegEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.inputLabel}>Phone Number</Text>
          <View style={styles.inputWrapper}>
            <PhoneIcon />
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              placeholderTextColor="#A0AAB4"
              value={regPhone}
              onChangeText={setRegPhone}
              keyboardType="phone-pad"
            />
          </View>

          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <LockIcon />
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              placeholderTextColor="#A0AAB4"
              value={regPassword}
              onChangeText={setRegPassword}
              secureTextEntry={!showRegPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowRegPassword(!showRegPassword)} activeOpacity={0.7}>
              <EyeIcon visible={showRegPassword} />
            </TouchableOpacity>
          </View>

          <Text style={styles.inputLabel}>Confirm Password</Text>
          <View style={styles.inputWrapper}>
            <LockIcon />
            <TextInput
              style={styles.input}
              placeholder="Confirm password"
              placeholderTextColor="#A0AAB4"
              value={regConfirmPassword}
              onChangeText={setRegConfirmPassword}
              secureTextEntry={!showRegConfirmPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowRegConfirmPassword(!showRegConfirmPassword)} activeOpacity={0.7}>
              <EyeIcon visible={showRegConfirmPassword} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={[styles.submitButton, { marginTop: 6 }]}
            activeOpacity={0.85}
            onPress={() => console.log('Register pressed')}
          >
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.bottomLinkContainer}>
            <Text style={styles.bottomLinkText}>Already have an account? </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setScreen('login')}>
              <Text style={styles.bottomLinkAction}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  // -----------------------------------------------------------------
  // FORGOT PASSWORD SCREEN
  // -----------------------------------------------------------------
  const renderForgotPassword = () => (
    <SafeAreaView style={styles.authSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.bgLight} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.authScrollContent}
      >
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => setScreen('login')}
        >
          <BackArrowIcon />
          <Text style={styles.backText}>Back to Login</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <ShieldLogo />
        </View>

        <Text style={styles.authTitle}>Forgot Password?</Text>
        <Text style={styles.authSubtitle}>Enter your email to reset your password</Text>

        <View style={styles.formCard}>
          <Text style={styles.inputLabel}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <MailIcon />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#A0AAB4"
              value={forgotEmail}
              onChangeText={setForgotEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity
            style={[styles.submitButton, { marginTop: 8 }]}
            activeOpacity={0.85}
            onPress={() => console.log('Send reset link pressed', { forgotEmail })}
          >
            <Text style={styles.submitButtonText}>Send Reset Link</Text>
          </TouchableOpacity>

          <View style={styles.bottomLinkContainer}>
            <Text style={styles.bottomLinkText}>Remember your password? </Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => setScreen('login')}>
              <Text style={styles.bottomLinkAction}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  switch (screen) {
    case 'login': return renderLogin();
    case 'register': return renderRegister();
    case 'forgotPassword': return renderForgotPassword();
    default: return renderLanding();
  }
}

// ===================================================================
// Icon Components — drawn with View only, zero external libraries
// ===================================================================

const IC = COLORS.primaryGreen;

function BackArrowIcon() {
  return (
    <View style={iconStyles.backArrowBox}>
      {/* left-pointing chevron using two thin rectangles */}
      <View style={[iconStyles.chevronBar, { transform: [{ rotate: '-45deg' }, { translateY: 3 }] }]} />
      <View style={[iconStyles.chevronBar, { transform: [{ rotate: '45deg' }, { translateY: -3 }] }]} />
    </View>
  );
}

function ShieldLogo() {
  return (
    <View style={iconStyles.shieldOuter}>
      <View style={iconStyles.handsRow}>
        <View style={[iconStyles.handArc, { transform: [{ rotate: '-15deg' }] }]} />
        <View style={[iconStyles.handArc, { transform: [{ rotate: '15deg' }] }]} />
      </View>
      <View style={iconStyles.shieldCircle}>
        <View style={iconStyles.shieldCrossV} />
        <View style={iconStyles.shieldCrossH} />
      </View>
    </View>
  );
}

function MailIcon() {
  return (
    <View style={iconStyles.iconBox}>
      <View style={iconStyles.mailOuter}>
        <View style={iconStyles.mailFlap} />
      </View>
    </View>
  );
}

function LockIcon() {
  return (
    <View style={iconStyles.iconBox}>
      <View style={iconStyles.lockShackle} />
      <View style={iconStyles.lockBody}>
        <View style={iconStyles.lockHole} />
      </View>
    </View>
  );
}

function EyeIcon({ visible }: { visible: boolean }) {
  return (
    <View style={iconStyles.eyeBox}>
      <View style={iconStyles.eyeOuter}>
        <View style={iconStyles.eyePupil} />
      </View>
      {!visible && <View style={iconStyles.eyeSlash} />}
    </View>
  );
}

function PersonIcon() {
  return (
    <View style={iconStyles.iconBox}>
      <View style={iconStyles.personHead} />
      <View style={iconStyles.personBody} />
    </View>
  );
}

function PhoneIcon() {
  return (
    <View style={iconStyles.iconBox}>
      <View style={iconStyles.phoneBody}>
        <View style={iconStyles.phoneScreen} />
        <View style={iconStyles.phoneButton} />
      </View>
    </View>
  );
}

const iconStyles = StyleSheet.create({
  // Back arrow
  backArrowBox: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  chevronBar: {
    position: 'absolute',
    width: 10,
    height: 2.5,
    backgroundColor: COLORS.textDark,
    borderRadius: 2,
  },

  // Shield logo
  shieldOuter: {
    width: 90,
    height: 100,
    backgroundColor: '#A9DFC7',
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    borderWidth: 3,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 4,
  },
  handsRow: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 8,
    gap: 3,
  },
  handArc: {
    width: 22,
    height: 12,
    borderRadius: 11,
    backgroundColor: '#5BB89A',
  },
  shieldCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2.5,
    borderColor: COLORS.white,
    backgroundColor: '#7FD4B0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  shieldCrossV: {
    position: 'absolute',
    width: 3,
    height: 18,
    backgroundColor: COLORS.white,
    borderRadius: 2,
  },
  shieldCrossH: {
    position: 'absolute',
    width: 18,
    height: 3,
    backgroundColor: COLORS.white,
    borderRadius: 2,
  },

  // Mail
  iconBox: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  mailOuter: {
    width: 20,
    height: 14,
    borderWidth: 1.8,
    borderColor: IC,
    borderRadius: 3,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mailFlap: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: IC,
    marginTop: -1,
  },

  // Lock
  lockShackle: {
    width: 12,
    height: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderWidth: 2,
    borderColor: IC,
    borderBottomWidth: 0,
    alignSelf: 'center',
    marginBottom: -1,
  },
  lockBody: {
    width: 18,
    height: 13,
    backgroundColor: IC,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockHole: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.white,
  },

  // Eye
  eyeBox: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  eyeOuter: {
    width: 20,
    height: 12,
    borderRadius: 6,
    borderWidth: 1.8,
    borderColor: IC,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyePupil: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: IC,
  },
  eyeSlash: {
    position: 'absolute',
    width: 26,
    height: 2,
    backgroundColor: IC,
    borderRadius: 1,
    transform: [{ rotate: '-40deg' }],
  },

  // Person
  personHead: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.8,
    borderColor: IC,
    alignSelf: 'center',
    marginBottom: 1,
  },
  personBody: {
    width: 16,
    height: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderWidth: 1.8,
    borderColor: IC,
    borderBottomWidth: 0,
  },

  // Phone
  phoneBody: {
    width: 13,
    height: 20,
    borderWidth: 1.8,
    borderColor: IC,
    borderRadius: 3,
    alignItems: 'center',
    paddingVertical: 2,
  },
  phoneScreen: {
    width: 7,
    height: 10,
    borderRadius: 1,
    borderWidth: 1,
    borderColor: IC,
    marginBottom: 1,
  },
  phoneButton: {
    width: 4,
    height: 4,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: IC,
  },
});

// ===================================================================
// Reusable Sub-Components
// ===================================================================

type FeatureIconType = 'heart' | 'plus' | 'alert' | 'person';

function FeatureIcon({ type }: { type: FeatureIconType }) {
  const color = COLORS.primaryGreen;
  switch (type) {
    case 'heart':
      return (
        <View style={{ width: 22, height: 20, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
            <View style={{ width: 11, height: 11, borderRadius: 5.5, backgroundColor: color, marginRight: -2 }} />
            <View style={{ width: 11, height: 11, borderRadius: 5.5, backgroundColor: color, marginLeft: -2 }} />
          </View>
          <View style={{ width: 0, height: 0, borderLeftWidth: 11, borderRightWidth: 11, borderTopWidth: 12, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderTopColor: color, marginTop: 8 }} />
        </View>
      );
    case 'plus':
      return (
        <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 3, height: 22, backgroundColor: color, borderRadius: 2, position: 'absolute' }} />
          <View style={{ width: 22, height: 3, backgroundColor: color, borderRadius: 2, position: 'absolute' }} />
        </View>
      );
    case 'alert':
      return (
        <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 0, height: 0, borderLeftWidth: 11, borderRightWidth: 11, borderBottomWidth: 19, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: color }} />
          <Text style={{ position: 'absolute', bottom: 0, fontSize: 10, fontWeight: '800', color: COLORS.white, lineHeight: 14 }}>!</Text>
        </View>
      );
    case 'person':
    default:
      return (
        <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: color, marginBottom: 2 }} />
          <View style={{ width: 18, height: 10, borderTopLeftRadius: 9, borderTopRightRadius: 9, backgroundColor: color }} />
        </View>
      );
  }
}

function FeatureCard({ iconType, label }: { iconType: FeatureIconType; label: string }) {
  return (
    <View style={styles.featureCard}>
      <View style={styles.featureIconBox}>
        <FeatureIcon type={iconType} />
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
  safeArea: { flex: 1, backgroundColor: COLORS.white },
  scrollContainer: { flex: 1, backgroundColor: COLORS.bgLight },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  miniShield: {
    width: 32,
    height: 34,
    backgroundColor: '#A9DFC7',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 11,
    borderBottomRightRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.white,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  miniShieldPlus: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.white,
    lineHeight: 18,
  },
  headerTitle: { fontSize: 22, fontWeight: '700', color: COLORS.textDark },

  // Hero
  heroWrapper: { paddingHorizontal: 16, paddingTop: 16 },
  heroImage: {
    width: '100%',
    minHeight: 560,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  heroImageStyle: { borderRadius: 20 },
  heroOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(20,30,28,0.45)',
    borderRadius: 20,
  },
  shieldLogoContainer: { marginBottom: 24, alignItems: 'center' },
  heroShieldOuter: {
    width: 110,
    height: 120,
    backgroundColor: 'rgba(160,220,195,0.95)',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    borderWidth: 4,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroShieldCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2.5,
    borderColor: COLORS.white,
    backgroundColor: '#7FD4B0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  crossV: { position: 'absolute', width: 4, height: 26, backgroundColor: COLORS.white, borderRadius: 2 },
  crossH: { position: 'absolute', width: 26, height: 4, backgroundColor: COLORS.white, borderRadius: 2 },
  heroTitle: { fontSize: 32, fontWeight: '800', color: COLORS.white, marginBottom: 14, textAlign: 'center' },
  heroSubtitle: { fontSize: 20, fontWeight: '700', color: '#8FE0C4', textAlign: 'center', marginBottom: 18, lineHeight: 26 },
  heroDescription: { fontSize: 14, color: COLORS.white, textAlign: 'center', lineHeight: 21, paddingHorizontal: 8 },

  // Feature Cards
  featuresContainer: { paddingHorizontal: 16, paddingTop: 24 },
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
    width: 44, height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.iconBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  featureLabel: { fontSize: 16, fontWeight: '600', color: COLORS.textDark },

  // CTA
  ctaContainer: { paddingHorizontal: 16, paddingTop: 12 },
  getStartedButton: {
    backgroundColor: COLORS.primaryGreen,
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: COLORS.primaryGreen,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  getStartedText: { color: COLORS.white, fontSize: 17, fontWeight: '700' },
  loginButton: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: COLORS.primaryBlue,
  },
  loginButtonText: { color: COLORS.primaryBlue, fontSize: 17, fontWeight: '700' },

  // Stats
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
  statValue: { fontSize: 20, fontWeight: '800', color: COLORS.primaryBlue, marginBottom: 4 },
  statLabel: { fontSize: 13, color: COLORS.textGray, fontWeight: '500' },

  // Footer
  footer: { backgroundColor: COLORS.footerDark, paddingVertical: 18, alignItems: 'center' },
  footerText: { color: '#B8C0C8', fontSize: 12 },

  // Auth screens shared
  authSafeArea: { flex: 1, backgroundColor: COLORS.bgLight },
  authScrollContent: {
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 40,
  },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  backText: { fontSize: 17, color: COLORS.textDark, fontWeight: '500' },
  logoContainer: { alignItems: 'center', marginTop: 20, marginBottom: 18 },
  authTitle: { fontSize: 26, fontWeight: '800', color: COLORS.textDark, textAlign: 'center', marginBottom: 6 },
  authSubtitle: { fontSize: 15, color: COLORS.primaryBlue, textAlign: 'center', marginBottom: 28, fontWeight: '500' },
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
  inputLabel: { fontSize: 15, fontWeight: '700', color: COLORS.textDark, marginBottom: 8, marginTop: 6 },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: COLORS.inputBorder,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 16,
    backgroundColor: COLORS.inputBg,
    minHeight: 52,
  },
  input: { flex: 1, paddingVertical: 14, fontSize: 15, color: COLORS.textDark },
  forgotPasswordContainer: { alignItems: 'flex-end', marginBottom: 22, marginTop: -4 },
  forgotPasswordText: { color: COLORS.primaryBlue, fontSize: 14, fontWeight: '600' },
  submitButton: {
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
  submitButtonText: { color: COLORS.white, fontSize: 17, fontWeight: '700' },
  bottomLinkContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  bottomLinkText: { fontSize: 14, color: COLORS.textDark },
  bottomLinkAction: { fontSize: 14, color: COLORS.primaryBlue, fontWeight: '700' },
});