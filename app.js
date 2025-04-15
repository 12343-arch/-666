// Advanced AI-powered Accessibility Framework
class AccessibilityAI {
  constructor() {
    this.initAdvancedFeatures();
    this.initIntelligentAssistance();
  }

  initAdvancedFeatures() {
    // More sophisticated voice and gesture recognition
    this.voiceRecognitionEngine = new AdvancedVoiceRecognition();
    this.gestureTranslationEngine = new AIGestureTranslator();
    this.emotionalSupportEngine = new EmotionalIntelligenceModule();
  }

  initIntelligentAssistance() {
    // Proactive assistance and personalization
    this.personalizedRecommendations = new PersonalizationEngine();
    this.contextualHelp = new ContextualAssistanceSystem();
  }

  // Advanced method for multi-modal interaction
  interact(input, context) {
    const multiModalResponse = this.processMultiModalInput(input, context);
    return multiModalResponse;
  }

  processMultiModalInput(input, context) {
    // Intelligent processing of voice, text, and gesture inputs
    const analysis = {
      voiceIntent: this.voiceRecognitionEngine.analyzeIntent(input),
      gestureContext: this.gestureTranslationEngine.interpretContext(context),
      emotionalState: this.emotionalSupportEngine.assessMood(input)
    };

    return this.generateIntelligentResponse(analysis);
  }

  generateIntelligentResponse(analysis) {
    // Generate context-aware, empathetic responses
    const responseStrategies = {
      supportive: () => "أنا هنا لمساعدتك في كل شيء",
      motivational: () => "أنت قوي وقادر على تحقيق أهدافك",
      informative: () => "دعني أساعدك في فهم المزيد"
    };

    const selectedStrategy = this.chooseResponseStrategy(analysis);
    return responseStrategies[selectedStrategy]();
  }

  chooseResponseStrategy(analysis) {
    // Intelligent strategy selection
    if (analysis.emotionalState === 'stressed') return 'supportive';
    if (analysis.voiceIntent === 'motivation') return 'motivational';
    return 'informative';
  }
}

class IntentClassificationModel {
  constructor() {
    // Define a basic set of intents and their keywords
    this.intentMap = {
      'help': ['مساعدة', 'أريد مساعدة', 'ممكن', 'هل يمكنك'],
      'navigation': ['اذهب', 'انتقل', 'افتح', 'تحرك'],
      'information': ['أخبرني', 'اشرح', 'معلومات', 'تفسير'],
      'control': ['تحكم', 'شغل', 'أوقف', 'تفعيل'],
      'emotional_support': ['محبط', 'متعب', 'مرهق', 'حزين']
    };
  }

  classify(input) {
    // Convert input to lowercase for easier matching
    input = input.toLowerCase();

    // Find the first matching intent based on keywords
    for (const [intent, keywords] of Object.entries(this.intentMap)) {
      if (keywords.some(keyword => input.includes(keyword))) {
        return intent;
      }
    }

    // Default intent if no match is found
    return 'general';
  }
}

// Advanced Voice Recognition with AI
class AdvancedVoiceRecognition {
  constructor() {
    this.supportedLanguages = ['ar', 'en'];
    this.intentClassifier = new IntentClassificationModel();
  }

  analyzeIntent(input) {
    return this.intentClassifier.classify(input);
  }
}

// Advanced Gesture Translation
class AIGestureTranslator {
  interpretContext(gestureData) {
    // Advanced gesture interpretation
    const gestureInterpretations = {
      'positive': ['👍', '✅', '🌟'],
      'help': ['🆘', '🤲', '🤝'],
      'communication': ['🗣️', '💬', '👋']
    };

    return this.matchGestureToContext(gestureData, gestureInterpretations);
  }

  matchGestureToContext(gestureData, interpretations) {
    // Intelligent gesture matching logic
    for (const [context, gestures] of Object.entries(interpretations)) {
      if (gestures.includes(gestureData)) return context;
    }
    return 'neutral';
  }
}

// Emotional Intelligence Module
class EmotionalIntelligenceModule {
  assessMood(input) {
    const moodKeywords = {
      'stressed': ['صعب', 'مرهق', 'متعب'],
      'motivated': ['أريد', 'سأحاول', 'طموح'],
      'neutral': ['عادي', 'بخير']
    };

    for (const [mood, keywords] of Object.entries(moodKeywords)) {
      if (keywords.some(keyword => input.includes(keyword))) {
        return mood;
      }
    }

    return 'neutral';
  }
}

// Personalization Engine
class PersonalizationEngine {
  constructor() {
    this.userProfiles = new Map();
  }

  createUserProfile(userId) {
    const profile = {
      preferences: {},
      accessibilityNeeds: {},
      learningProgress: {}
    };
    this.userProfiles.set(userId, profile);
  }

  updateUserProfile(userId, updates) {
    const profile = this.userProfiles.get(userId);
    Object.assign(profile, updates);
  }
}

// Contextual Assistance System
class ContextualAssistanceSystem {
  provideContextualHelp(context) {
    const helpStrategies = {
      'motor': this.motorSupportHelp(),
      'hearing': this.hearingSupportHelp(),
      'visual': this.visualSupportHelp()
    };

    return helpStrategies[context] || "كيف يمكنني مساعدتك اليوم؟";
  }

  motorSupportHelp() {
    return "نصائح للتحرك بسهولة وأمان";
  }

  hearingSupportHelp() {
    return "طرق التواصل الفعال باستخدام لغة الإشارة";
  }

  visualSupportHelp() {
    return "تقنيات للتعامل مع التحديات البصرية";
  }
}

class AccessibilityApp {
  constructor() {
    this.initEventListeners();
    this.initVoiceNavigation();
  }

  initEventListeners() {
    // Deaf Support
    document.getElementById('sign-language-translator')?.addEventListener('click', this.startSignLanguageTranslation);
    document.getElementById('convert-to-sign')?.addEventListener('click', this.convertTextToSignLanguage);

    // Blind Support
    document.getElementById('text-to-speech')?.addEventListener('click', this.readText);
    document.getElementById('environment-description')?.addEventListener('click', this.describeEnvironment);

    // Mobility Support
    document.getElementById('voice-control')?.addEventListener('click', this.activateVoiceControl);
    document.getElementById('high-contrast')?.addEventListener('change', this.toggleHighContrast);
    document.getElementById('large-text')?.addEventListener('change', this.toggleLargeText);

    // Emergency Services
    document.getElementById('emergency-call')?.addEventListener('click', this.makeEmergencyCall);
    document.getElementById('location-share')?.addEventListener('click', this.shareLocation);

    // Gesture Translation
    const gestureTranslationBtn = document.getElementById('start-gesture-translation');
    const gestureOutput = document.getElementById('gesture-description');
    const gestureSvg = document.getElementById('gesture-svg');

    if (gestureTranslationBtn && gestureOutput && gestureSvg) {
      const gestureTranslator = new GestureTranslator(gestureOutput, gestureSvg);

      // Voice recognition for gesture translation
      if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'ar-SA';

        gestureTranslationBtn.addEventListener('click', () => {
          recognition.start();
          gestureOutput.textContent = 'انتظار الأمر الصوتي...';
        });

        recognition.onresult = (event) => {
          const command = event.results[0][0].transcript.trim();
          gestureTranslator.translateToGesture(command);
        };

        recognition.onerror = (event) => {
          gestureOutput.textContent = 'حدث خطأ في التعرف على الصوت';
        };
      } else {
        gestureTranslationBtn.disabled = true;
        gestureOutput.textContent = 'التعرف الصوتي غير مدعوم';
      }
    }

    // Device Control
    const deviceOutput = document.getElementById('device-output');
    if (deviceOutput) {
      new DeviceController(deviceOutput);
    }

    // Add back button navigation for motor support page
    const motorBackBtn = document.querySelector('.back-btn');
    if (motorBackBtn) {
      motorBackBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'index.html'; // Explicit navigation
      });
    }
  }

  initVoiceNavigation() {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'ar-SA';

      recognition.onresult = (event) => {
        const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
        this.handleVoiceCommand(transcript);
      };

      // Start listening automatically when the app loads
      recognition.start();

      // Restart recognition if it stops
      recognition.onend = () => {
        recognition.start();
      };
    } else {
      console.warn('Voice recognition not supported');
    }
  }

  handleVoiceCommand(command) {
    console.log('Voice command detected:', command);

    // Navigation commands
    const navigationCommands = {
      'الإعاقة السمعية': () => this.navigateTo('hearing.html'),
      'الإعاقة البصرية': () => this.navigateTo('visual.html'),
      'الإعاقة الحركية': () => this.navigateTo('motor.html')
    };

    // Check if the command matches any navigation commands
    for (const [keyword, action] of Object.entries(navigationCommands)) {
      if (command.includes(keyword)) {
        action();
        break;
      }
    }
  }

  navigateTo(page) {
    // Navigate to the specified page
    window.location.href = page;
  }

  startSignLanguageTranslation() {
    const output = document.getElementById('sign-language-output');
    output.innerHTML = 'جارٍ الترجمة باستخدام لغة الإشارة...';
    // Simulated AI-powered sign language translation
    setTimeout(() => {
      output.innerHTML = '🤲 تم الترجمة بنجاح - يمكنك متابعة المحادثة';
    }, 2000);
  }

  convertTextToSignLanguage() {
    const input = document.getElementById('text-to-sign-input');
    const text = input.value;
    if (!text) {
      alert('يرجى إدخال نص للترجمة');
      return;
    }
    // Simulated text to sign language conversion
    alert(`تم تحويل النص: "${text}" إلى لغة الإشارة`);
  }

  readText() {
    const textArea = document.getElementById('text-to-read');
    const text = textArea.value;
    if (!text) {
      alert('يرجى إدخال نص للقراءة');
      return;
    }
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      window.speechSynthesis.speak(utterance);
    } else {
      alert('عذراً، خدمة التحويل الصوتي غير متاحة');
    }
  }

  describeEnvironment() {
    const output = document.getElementById('environment-output');
    output.innerHTML = 'جارٍ التعرف على المحيط...';
    // Simulated environment description
    setTimeout(() => {
      output.innerHTML = '📸 تم التعرف على غرفة مكتبية بها طاولة ومكتب وكرسي';
    }, 2000);
  }

  activateVoiceControl() {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.lang = 'ar-SA';
      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript;
        alert(`تم استلام الأمر الصوتي: ${command}`);
      };
      recognition.start();
    } else {
      alert('عذراً، التحكم الصوتي غير متاح');
    }
  }

  toggleHighContrast(event) {
    document.body.classList.toggle('high-contrast', event.target.checked);
  }

  toggleLargeText(event) {
    document.body.classList.toggle('large-text', event.target.checked);
  }

  makeEmergencyCall() {
    alert('جاري الاتصال بخدمات الطوارئ');
    // In a real app, this would trigger actual emergency services
  }

  shareLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          alert(`تم مشاركة موقعك: ${latitude}, ${longitude}`);
        },
        (error) => {
          alert('خطأ في تحديد الموقع');
        }
      );
    } else {
      alert('خدمة تحديد الموقع غير متاحة');
    }
  }
}

class GestureTranslator {
  constructor(outputElement, svgElement) {
    this.outputElement = outputElement;
    this.svgElement = svgElement;
    this.handGroup = svgElement.querySelector('#hand-group');
    this.arm = svgElement.querySelector('#arm');
    this.hand = svgElement.querySelector('#hand');
  }

  translateToGesture(command) {
    // Reset previous animations
    this.handGroup.style.animation = 'none';
    
    // More comprehensive gesture mapping with walking-related translations
    const gestureMap = {
        'مرحبا': this.wave,
        'أهلا': this.wave,
        'وداعا': this.goodbye,
        'اتصال': this.point,
        'توقف': this.stop,
        'نعم': this.thumbsUp,
        'لا': this.thumbsDown,
        'مساعدة': this.raiseHand,
        
        // Walking-related translations
        'كيف أمشي': this.walkTutorial,
        'طريقة المشي': this.walkTutorial,
        'مشي': this.walkingGesture,
        'المشي': this.walkingGesture
    };

    // Find and execute the appropriate gesture
    for (const [keyword, gesture] of Object.entries(gestureMap)) {
        if (command.includes(keyword)) {
            gesture.call(this, command);
            return;
        }
    }

    // Default gesture if no match
    this.defaultGesture(command);
  }

  wave() {
    this.outputElement.textContent = 'تم تنفيذ حركة التحية';
    this.handGroup.style.animation = 'handWave 1s infinite';
  }

  point(command) {
    this.outputElement.textContent = `الإشارة إلى: ${command}`;
    this.handGroup.style.animation = 'pointGesture 0.5s';
  }

  stop() {
    this.outputElement.textContent = 'إيقاف الحركة';
    this.arm.setAttribute('stroke', '#e74c3c');
  }

  thumbsUp() {
    this.outputElement.textContent = 'إشارة الموافقة';
    this.hand.setAttribute('fill', '#2ecc71');
  }

  thumbsDown() {
    this.outputElement.textContent = 'إشارة الرفض';
    this.hand.setAttribute('fill', '#e74c3c');
  }

  raiseHand() {
    this.outputElement.textContent = 'رفع اليد طلباً للمساعدة';
    this.handGroup.style.animation = 'raiseHand 1s';
  }

  defaultGesture(command) {
    this.outputElement.textContent = `تم استلام الأمر: ${command}`;
    this.handGroup.style.animation = 'none';
  }

  walkTutorial(command) {
    this.outputElement.innerHTML = `
        <strong>دليل المشي:</strong>
        <ol>
            <li>حافظ على توازنك</li>
            <li>ضع الوزن بالتساوي على القدمين</li>
            <li>استخدم المساعدات المناسبة إذا لزم الأمر</li>
        </ol>
    `;
    
    // Animate walking tutorial visualization
    this.animateWalkingTutorial();
  }

  animateWalkingTutorial() {
    const arm = this.svgElement.querySelector('#arm');
    const hand = this.svgElement.querySelector('#hand');

    // Simulate walking movement
    arm.setAttribute('d', 'M150,100 Q180,130 150,160 Q120,190 150,220');
    hand.setAttribute('cy', '220');

    // Add walking animation
    this.handGroup.style.animation = 'walkingAnimation 2s infinite';
  }

  walkingGesture(command) {
    this.outputElement.innerHTML = `
        <strong>حركات المشي:</strong>
        <p>تم ترجمة الحركة: مشي متوازن وثابت</p>
    `;
    
    // Demonstrate walking motion
    this.demonstrateWalkingMotion();
  }

  demonstrateWalkingMotion() {
    const arm = this.svgElement.querySelector('#arm');
    const hand = this.svgElement.querySelector('#hand');

    // More complex walking motion
    arm.setAttribute('d', 'M150,100 Q180,130 150,160 Q120,190 150,220 Q180,250 150,280');
    hand.setAttribute('cy', '280');

    this.handGroup.style.animation = 'dynamicWalkingMotion 3s infinite';
  }
}

class DeviceController {
  constructor(outputElement) {
    this.outputElement = outputElement;
    this.devices = {
      tv: {
        power: false,
        volume: 50,
        channel: 1
      },
      ac: {
        power: false,
        temperature: 22,
        mode: 'cool'
      },
      'washing-machine': {
        power: false,
        running: false,
        program: 'normal'
      }
    };
    this.registeredDevices = [];
    this.initDeviceRegistration();
    this.initVoiceControl();
  }

  initDeviceRegistration() {
    const registerDeviceBtn = document.getElementById('register-device-btn');
    const deviceIdInput = document.getElementById('device-id-input');
    const deviceTypeSelect = document.getElementById('device-type-select');
    const devicesList = document.getElementById('devices-list');

    if (registerDeviceBtn && deviceIdInput && deviceTypeSelect && devicesList) {
      registerDeviceBtn.addEventListener('click', () => {
        const deviceId = deviceIdInput.value.trim();
        const deviceType = deviceTypeSelect.value;

        if (deviceId && deviceType) {
          this.registerDevice(deviceId, deviceType);
          
          // Clear input fields
          deviceIdInput.value = '';
          deviceTypeSelect.value = '';
        } else {
          alert('يرجى إدخال معرف الجهاز واختيار نوعه');
        }
      });
    }
  }

  registerDevice(deviceId, deviceType) {
    // Check if device already exists
    const existingDevice = this.registeredDevices.find(
      device => device.id === deviceId
    );

    if (existingDevice) {
      alert('هذا الجهاز مسجل بالفعل');
      return;
    }

    // Add new device
    const newDevice = { id: deviceId, type: deviceType };
    this.registeredDevices.push(newDevice);

    // Update the devices list in the UI
    this.updateRegisteredDevicesList();
  }

  updateRegisteredDevicesList() {
    const devicesList = document.getElementById('devices-list');
    
    if (devicesList) {
      // Clear existing list
      devicesList.innerHTML = '';

      // Populate list with registered devices
      this.registeredDevices.forEach((device, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <span>${device.type}: ${device.id}</span>
          <span class="remove-device" data-index="${index}">×</span>
        `;
        
        devicesList.appendChild(listItem);

        // Add event listener to remove device
        const removeBtn = listItem.querySelector('.remove-device');
        removeBtn.addEventListener('click', () => {
          this.removeDevice(index);
        });
      });
    }
  }

  removeDevice(index) {
    // Remove device from the registered devices array
    this.registeredDevices.splice(index, 1);

    // Update the UI
    this.updateRegisteredDevicesList();
  }

  initVoiceControl() {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'ar-SA';

      recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.trim().toLowerCase();
        this.processDeviceCommand(command);
      };

      // Attach recognition to device control buttons
      const deviceControlBtn = document.querySelector('#start-gesture-translation');
      if (deviceControlBtn) {
        deviceControlBtn.addEventListener('click', () => {
          recognition.start();
          this.updateOutput('انتظار الأمر الصوتي للتحكم بالأجهزة...');
        });
      }
    }
  }

  processDeviceCommand(command) {
    const deviceCommands = {
      'التلفاز': () => this.controlDevice('tv', 'power'),
      'التكييف': () => this.controlDevice('ac', 'power'),
      'الغسالة': () => this.controlDevice('washing-machine', 'power'),
      'رفع صوت التلفاز': () => this.controlDevice('tv', 'volume-up'),
      'خفض صوت التلفاز': () => this.controlDevice('tv', 'volume-down'),
      'رفع درجة الحرارة': () => this.controlDevice('ac', 'temp-up'),
      'خفض درجة الحرارة': () => this.controlDevice('ac', 'temp-down'),
      'بدء الغسيل': () => this.controlDevice('washing-machine', 'start')
    };

    for (const [keyword, action] of Object.entries(deviceCommands)) {
      if (command.includes(keyword)) {
        action();
        return;
      }
    }

    this.updateOutput(`أمر غير مفهوم: ${command}`);
  }

  controlDevice(deviceName, action) {
    // First, check if the device is registered
    const registeredDevice = this.registeredDevices.find(
      device => device.type === deviceName
    );

    if (!registeredDevice) {
      this.updateOutput(`الجهاز ${deviceName} غير مسجل`);
      return;
    }

    // Existing device control logic...
    // You can now use registeredDevice.id if needed
    const device = this.devices[deviceName];
    let message = '';

    switch(deviceName) {
      case 'tv':
        message = this.controlTV(device, action);
        break;
      case 'ac':
        message = this.controlAC(device, action);
        break;
      case 'washing-machine':
        message = this.controlWashingMachine(device, action);
        break;
    }

    this.updateOutput(message);
  }

  controlTV(tv, action) {
    switch(action) {
      case 'power':
        tv.power = !tv.power;
        return `تم ${tv.power ? 'تشغيل' : 'إيقاف'} التلفاز`;
      case 'volume-up':
        tv.volume = Math.min(tv.volume + 10, 100);
        return `تم رفع الصوت إلى ${tv.volume}`;
      case 'volume-down':
        tv.volume = Math.max(tv.volume - 10, 0);
        return `تم خفض الصوت إلى ${tv.volume}`;
      default:
        return 'أمر غير معروف للتلفاز';
    }
  }

  controlAC(ac, action) {
    switch(action) {
      case 'power':
        ac.power = !ac.power;
        return `تم ${ac.power ? 'تشغيل' : 'إيقاف'} المكيف`;
      case 'temp-up':
        ac.temperature = Math.min(ac.temperature + 1, 30);
        return `تم رفع درجة الحرارة إلى ${ac.temperature}`;
      case 'temp-down':
        ac.temperature = Math.max(ac.temperature - 1, 16);
        return `تم خفض درجة الحرارة إلى ${ac.temperature}`;
      default:
        return 'أمر غير معروف للمكيف';
    }
  }

  controlWashingMachine(washingMachine, action) {
    switch(action) {
      case 'power':
        washingMachine.power = !washingMachine.power;
        return `تم ${washingMachine.power ? 'تشغيل' : 'إيقاف'} الغسالة`;
      case 'start':
        if (washingMachine.power) {
          washingMachine.running = true;
          return 'بدأ برنامج الغسيل';
        }
        return 'يرجى تشغيل الغسالة أولاً';
      case 'stop':
        washingMachine.running = false;
        return 'تم إيقاف الغسيل';
      default:
        return 'أمر غير معروف للغسالة';
    }
  }

  updateOutput(message) {
    const outputElement = document.getElementById('device-output');
    if (outputElement) {
      outputElement.textContent = message;
    }
  }
}

class NavigationSafetyManager {
  constructor() {
    this.safetyEnabled = false;
    this.emergencyContacts = [];
    this.initEventListeners();
  }

  initEventListeners() {
    const navigationSafetyToggle = document.getElementById('navigation-safety-toggle');
    const obstacleDetection = document.getElementById('obstacle-detection');
    const fallDetection = document.getElementById('fall-detection');
    const locationTracking = document.getElementById('location-tracking');
    const addEmergencyContactBtn = document.getElementById('add-emergency-contact');
    const emergencyContactName = document.getElementById('emergency-contact-name');
    const emergencyContactPhone = document.getElementById('emergency-contact-phone');
    const emergencyContactsList = document.getElementById('emergency-contacts-list');

    // Safety toggle
    navigationSafetyToggle?.addEventListener('change', (event) => {
      this.safetyEnabled = event.target.checked;
      this.logAlert(`نظام السلامة ${this.safetyEnabled ? 'مفعل' : 'معطل'}`);
    });

    // Obstacle detection
    obstacleDetection?.addEventListener('change', (event) => {
      if (this.safetyEnabled) {
        this.setupObstacleDetection(event.target.checked);
      }
    });

    // Fall detection
    fallDetection?.addEventListener('change', (event) => {
      if (this.safetyEnabled) {
        this.setupFallDetection(event.target.checked);
      }
    });

    // Location tracking
    locationTracking?.addEventListener('change', (event) => {
      if (this.safetyEnabled) {
        this.setupLocationTracking(event.target.checked);
      }
    });

    // Add emergency contact
    addEmergencyContactBtn?.addEventListener('click', () => {
      const name = emergencyContactName.value.trim();
      const phone = emergencyContactPhone.value.trim();

      if (name && phone) {
        this.addEmergencyContact(name, phone);
        emergencyContactName.value = '';
        emergencyContactPhone.value = '';
      }
    });
  }

  setupObstacleDetection(enabled) {
    if (enabled) {
      this.logAlert('تم تفعيل كشف العوائق');
      // Simulated obstacle detection
      this.obstacleDetectionInterval = setInterval(() => {
        if (Math.random() < 0.1) {  // 10% chance of obstacle
          this.triggerObstacleAlert();
        }
      }, 5000);
    } else {
      clearInterval(this.obstacleDetectionInterval);
      this.logAlert('تم إيقاف كشف العوائق');
    }
  }

  setupFallDetection(enabled) {
    if (enabled) {
      this.logAlert('تم تفعيل كشف السقوط');
      // Simulated fall detection
      this.fallDetectionInterval = setInterval(() => {
        if (Math.random() < 0.05) {  // 5% chance of fall
          this.triggerFallAlert();
        }
      }, 7000);
    } else {
      clearInterval(this.fallDetectionInterval);
      this.logAlert('تم إيقاف كشف السقوط');
    }
  }

  setupLocationTracking(enabled) {
    if (enabled && navigator.geolocation) {
      this.logAlert('تم تفعيل تتبع الموقع');
      this.locationTrackingWatch = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.logAlert(`الموقع الحالي: ${latitude}, ${longitude}`);
        },
        (error) => {
          this.logAlert('خطأ في تحديد الموقع');
        },
        { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 }
      );
    } else {
      navigator.geolocation.clearWatch(this.locationTrackingWatch);
      this.logAlert('تم إيقاف تتبع الموقع');
    }
  }

  addEmergencyContact(name, phone) {
    const contact = { name, phone };
    this.emergencyContacts.push(contact);
    this.updateEmergencyContactsList();
    this.logAlert(`تمت إضافة جهة اتصال طارئة: ${name}`);
  }

  updateEmergencyContactsList() {
    const emergencyContactsList = document.getElementById('emergency-contacts-list');
    emergencyContactsList.innerHTML = '';

    this.emergencyContacts.forEach((contact, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        ${contact.name} - ${contact.phone}
        <button class="remove-contact" data-index="${index}">×</button>
      `;
      emergencyContactsList.appendChild(listItem);

      // Add remove contact listener
      listItem.querySelector('.remove-contact').addEventListener('click', () => {
        this.removeEmergencyContact(index);
      });
    });
  }

  removeEmergencyContact(index) {
    this.emergencyContacts.splice(index, 1);
    this.updateEmergencyContactsList();
    this.logAlert('تمت إزالة جهة اتصال طارئة');
  }

  triggerObstacleAlert() {
    this.playAlertSound();
    this.logAlert('تحذير: عائق تم اكتشافه!');
    this.notifyEmergencyContacts('تم اكتشاف عائق أثناء التنقل');
  }

  triggerFallAlert() {
    this.playAlertSound();
    this.logAlert('تحذير: سقوط محتمل تم اكتشافه!');
    this.notifyEmergencyContacts('تم اكتشاف سقوط محتمل');
  }

  notifyEmergencyContacts(message) {
    this.emergencyContacts.forEach(contact => {
      // In a real app, this would send SMS or push notification
      console.log(`Notifying ${contact.name} at ${contact.phone}: ${message}`);
    });
  }

  playAlertSound() {
    const audio = new Audio('obstacle-alert.mp3');
    audio.play().catch(error => {
      console.error('Error playing alert sound:', error);
    });
  }

  logAlert(message) {
    const alertsLog = document.getElementById('navigation-alerts-log');
    if (alertsLog) {
      const alertEntry = document.createElement('div');
      alertEntry.textContent = `${new Date().toLocaleTimeString()}: ${message}`;
      alertsLog.prepend(alertEntry);

      // Limit log entries
      if (alertsLog.children.length > 10) {
        alertsLog.removeChild(alertsLog.lastChild);
      }
    }
  }
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const accessibilityAI = new AccessibilityAI();
  window.accessibilityAI = accessibilityAI; // Optional: make it globally accessible if needed
  
  new AccessibilityApp();
  new NavigationSafetyManager();
});

window.AccessibilityAI = AccessibilityAI;