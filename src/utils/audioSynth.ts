// High-quality Web Audio Synthesizer producing custom solfeggio frequencies & soothing soundscapes
class AudioPreviewSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private droneOscLeft: OscillatorNode | null = null;
  private droneOscRight: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;
  private currentTrackId: string | null = null;

  private initCtx() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTrack(id: string) {
    this.stop();
    this.initCtx();
    if (!this.ctx) return;

    this.isPlaying = true;
    this.currentTrackId = id;

    if (id === '1') {
      // TRACK 1: Davi e Golias - 528 Hz Solfeggio (Miracle & Courage Frequency)
      this.playHeroic528Hz();
    } else if (id === '2') {
      // TRACK 2: Arca de Noé - 432 Hz Crystalline Chimes & Nature
      this.playNature432Hz();
    } else if (id === '3') {
      // TRACK 3: Menino Sem Birras - 396 Hz Stress Relief & Calm Celesta
      this.playCalm396Hz();
    } else if (id === '4') {
      // TRACK 4: Estrelinha Agradecida - 432 Hz + 3.5Hz Delta Binaural Lullaby Pad
      this.playBedtimeDelta432Hz();
    } else {
      this.playNature432Hz();
    }
  }

  // TRACK 1: 528 Hz Solfeggio Courage Theme
  private playHeroic528Hz() {
    if (!this.ctx) return;

    // Sustained 528Hz background drone
    const drone = this.ctx.createOscillator();
    const droneGain = this.ctx.createGain();
    drone.type = 'sine';
    drone.frequency.setValueAtTime(528, this.ctx.currentTime); // 528 Hz Transformation/Courage
    
    droneGain.gain.setValueAtTime(0, this.ctx.currentTime);
    droneGain.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 0.5);

    drone.connect(droneGain);
    droneGain.connect(this.ctx.destination);
    drone.start();

    this.droneOscLeft = drone;
    this.droneGain = droneGain;

    // Arpeggio notes (528Hz harmonic series: C5, E5, G5, B5, C6)
    const scale = [528.00, 660.00, 792.00, 990.00, 1056.00];
    let index = 0;

    const step = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;

      // Primary synth
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const freq = scale[index % scale.length];
      index++;

      osc1.type = 'triangle'; // Warm brassy warmth
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);
      osc2.frequency.setValueAtTime(freq / 2, now); // Sub octave

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 1.3);
      osc2.stop(now + 1.3);
    };

    step();
    this.timerId = window.setInterval(step, 550);
  }

  // TRACK 2: 432 Hz Crystalline Chimes
  private playNature432Hz() {
    if (!this.ctx) return;

    const scale = [432.00, 540.00, 648.00, 720.00, 864.00, 1080.00]; // 432Hz harmonic pentatonic
    let stepCount = 0;

    const step = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const freq = scale[Math.floor(Math.random() * scale.length)];
      osc.frequency.setValueAtTime(freq, now);

      // Glassy chime envelope
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0008, now + 1.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.6);

      stepCount++;
    };

    step();
    this.timerId = window.setInterval(step, 400);
  }

  // TRACK 3: 396 Hz Solfeggio Stress Release Celesta
  private playCalm396Hz() {
    if (!this.ctx) return;

    // 396 Hz Solfeggio root drone
    const drone = this.ctx.createOscillator();
    const droneGain = this.ctx.createGain();
    drone.type = 'sine';
    drone.frequency.setValueAtTime(396, this.ctx.currentTime); // 396 Hz Liberation from fear & anxiety

    droneGain.gain.setValueAtTime(0, this.ctx.currentTime);
    droneGain.gain.linearRampToValueAtTime(0.09, this.ctx.currentTime + 0.5);

    drone.connect(droneGain);
    droneGain.connect(this.ctx.destination);
    drone.start();

    this.droneOscLeft = drone;
    this.droneGain = droneGain;

    // Soothing warm rhodes/celesta scale
    const scale = [396.00, 495.00, 594.00, 792.00];
    let idx = 0;

    const step = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      const freq = scale[idx % scale.length];
      idx++;

      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.1, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 1.9);
    };

    step();
    this.timerId = window.setInterval(step, 750);
  }

  // TRACK 4: 432 Hz Bedtime + 3.5Hz Delta Wave Lullaby
  private playBedtimeDelta432Hz() {
    if (!this.ctx) return;

    // Binaural delta beat: Left 216 Hz, Right 219.5 Hz -> 3.5 Hz Delta frequency for deep sleep
    const merger = this.ctx.createChannelMerger(2);

    const oscL = this.ctx.createOscillator();
    const oscR = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    oscL.type = 'sine';
    oscR.type = 'sine';
    oscL.frequency.setValueAtTime(216, this.ctx.currentTime); // 432Hz / 2
    oscR.frequency.setValueAtTime(219.5, this.ctx.currentTime); // +3.5Hz Delta wave

    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.1, this.ctx.currentTime + 1.0);

    oscL.connect(merger, 0, 0); // Left channel
    oscR.connect(merger, 0, 1); // Right channel
    merger.connect(gain);
    gain.connect(this.ctx.destination);

    oscL.start();
    oscR.start();

    this.droneOscLeft = oscL;
    this.droneOscRight = oscR;
    this.droneGain = gain;

    // Slow dreamy bedtime bells
    const scale = [432.00, 540.00, 648.00, 864.00];
    let stepCount = 0;

    const step = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;

      const bellOsc = this.ctx.createOscillator();
      const bellGain = this.ctx.createGain();

      bellOsc.type = 'sine';
      const freq = scale[stepCount % scale.length];
      stepCount++;

      bellOsc.frequency.setValueAtTime(freq, now);

      bellGain.gain.setValueAtTime(0, now);
      bellGain.gain.linearRampToValueAtTime(0.08, now + 0.2);
      bellGain.gain.exponentialRampToValueAtTime(0.0005, now + 2.5);

      bellOsc.connect(bellGain);
      bellGain.connect(this.ctx.destination);

      bellOsc.start(now);
      bellOsc.stop(now + 2.6);
    };

    step();
    this.timerId = window.setInterval(step, 1100);
  }

  public stop() {
    this.isPlaying = false;
    this.currentTrackId = null;

    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }

    if (this.droneGain && this.ctx) {
      try {
        this.droneGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
      } catch (e) {
        // ignore
      }
    }

    setTimeout(() => {
      if (this.droneOscLeft) {
        try { this.droneOscLeft.stop(); } catch (e) {}
        this.droneOscLeft = null;
      }
      if (this.droneOscRight) {
        try { this.droneOscRight.stop(); } catch (e) {}
        this.droneOscRight = null;
      }
      this.droneGain = null;
    }, 250);
  }

  // Short convincing notification chime for sales popup
  public playNotificationChime() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // Two ascending soft harmonic tones (C5 -> G5)
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sine';
      osc2.type = 'sine';

      // First note
      osc1.frequency.setValueAtTime(528, now); // 528 Hz
      osc1.frequency.setValueAtTime(792, now + 0.08); // 792 Hz

      // Second note double octave soft bell
      osc2.frequency.setValueAtTime(1056, now + 0.08);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.5);
      osc2.stop(now + 0.5);
    } catch (e) {
      console.warn('Audio play restricted by browser auto-play policy', e);
    }
  }

  // Quick soft click sound for UI actions
  public playUiPop() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {
      // ignore
    }
  }

  // Triumphant fanfare sound for accepting upsell / main conversion CTA
  public playSuccessFanfare() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.09);

        gain.gain.setValueAtTime(0, now + i * 0.09);
        gain.gain.linearRampToValueAtTime(0.12, now + i * 0.09 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now + i * 0.09);
        osc.stop(now + i * 0.09 + 0.4);
      });
    } catch (e) {
      // ignore
    }
  }

  // Star accomplishment sound for interactive routine planner
  public playStarSound() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(1174.66, now + 0.12); // D6 sparkle

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.28);
    } catch (e) {
      // ignore
    }
  }

  // Soft low tone when attempting to decline
  public playDeclineTone() {
    try {
      this.initCtx();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(330, now);
      osc.frequency.linearRampToValueAtTime(220, now + 0.15);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {
      // ignore
    }
  }

  public getPlayingId() {
    return this.isPlaying ? this.currentTrackId : null;
  }
}

export const audioSynth = new AudioPreviewSynthesizer();
