import React, { useState } from 'react';
import { UrgencyHeader } from './components/UrgencyHeader';
import { HeroSection } from './components/HeroSection';
import { IncludedItems } from './components/IncludedItems';
import { BonusSection } from './components/BonusSection';
import { Testimonials } from './components/Testimonials';
import { DoubleCtaSection } from './components/DoubleCtaSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { DownsellModal } from './components/DownsellModal';
import { StickyMobileCta } from './components/StickyMobileCta';
import { LiveSalesNotification } from './components/LiveSalesNotification';
import { CheckCircle2 } from 'lucide-react';
import { CHECKOUT_URL } from './constants';

export default function App() {
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showDownsellModal, setShowDownsellModal] = useState<boolean>(false);
  const [orderFinalizedWithoutUpsell, setOrderFinalizedWithoutUpsell] = useState<boolean>(false);

  const handleAcceptUpsell = () => {
    setShowDownsellModal(false);
    
    // Safely open checkout in a new tab without forcing in-iframe navigation that causes white screen
    try {
      window.open(CHECKOUT_URL, '_blank', 'noopener,noreferrer');
    } catch (e) {
      console.error('Could not open checkout popup automatically:', e);
    }
  };

  const handleDeclineClick = () => {
    setShowDownsellModal(true);
  };

  const handleConfirmDecline = () => {
    setShowDownsellModal(false);
    setOrderFinalizedWithoutUpsell(true);
  };

  if (orderFinalizedWithoutUpsell) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 rounded-3xl p-8 border border-slate-800 text-center shadow-2xl">
          <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/40">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Pedido Principal Confirmado!</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Seu pedido do kit principal <strong>Acelerador Kids (+2.000 Atividades em PDF)</strong> foi finalizado com sucesso. O e-mail de acesso já foi enviado para você.
          </p>
          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-400 mb-6">
            Nota: A oferta da Coleção Ouro por R$ 29,90 foi recusada e expirou.
          </div>
          <button
            onClick={() => setOrderFinalizedWithoutUpsell(false)}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors cursor-pointer"
          >
            Voltar para a Página da Oferta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-20 md:pb-0">
      
      {/* 1. Urgency Bar at the Top */}
      <UrgencyHeader />

      {/* 2. Hero Section */}
      <HeroSection 
        onAccept={handleAcceptUpsell} 
        onDecline={handleDeclineClick} 
      />

      {/* 3. Included Items (Bento Grid) with Real Web Audio Synthesizer */}
      <IncludedItems />

      {/* 4. Exclusive Bonus */}
      <BonusSection onAccept={handleAcceptUpsell} />

      {/* 5. Social Proof & Mother Testimonials */}
      <Testimonials />

      {/* 6. Guarantee Section */}
      <GuaranteeSection onAccept={handleAcceptUpsell} />

      {/* 7. Double CTA Section */}
      <DoubleCtaSection 
        onAccept={handleAcceptUpsell} 
        onDecline={handleDeclineClick} 
      />

      {/* 8. FAQ Accordion */}
      <FaqSection />

      {/* 9. Footer */}
      <Footer />

      {/* Live Sales Proof Popups (FOMO) */}
      <LiveSalesNotification />

      {/* Sticky Bottom Bar for Mobile */}
      <StickyMobileCta onAccept={handleAcceptUpsell} />

      {/* Success Modal */}
      {showSuccessModal && (
        <OrderSuccessModal onClose={() => setShowSuccessModal(false)} />
      )}

      {/* Downsell / Second Chance Modal */}
      {showDownsellModal && (
        <DownsellModal
          onConfirmAccept={handleAcceptUpsell}
          onConfirmDecline={handleConfirmDecline}
          onClose={() => setShowDownsellModal(false)}
        />
      )}

    </div>
  );
}
