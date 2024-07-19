import React, { useState } from 'react';
import PaymentCardModal from '../../../components/PaymentCardModal';
import PaymentEWalletModal from '../../../components/PaymentEWalletModal';
import gcashLogo from "../../../assets/img/gcash.svg"; 
import paymayaLogo from "../../../assets/img/maya.svg"; 

export default function CompanyBillingPage() {
    const [cardModalVisible, setCardModalVisible] = useState(false);
    const [eWalletModalVisible, setEWalletModalVisible] = useState(false);
    const [savedCardInfo, setSavedCardInfo] = useState([]); // State to store saved card information
    const [savedEWalletInfo, setSavedEWalletInfo] = useState([]); // State to store saved e-wallet information

    const openCardModal = () => {
        setCardModalVisible(true);
    };

    const closeCardModal = () => {
        setCardModalVisible(false);
    };

    const openEWalletModal = () => {
        setEWalletModalVisible(true);
    };

    const closeEWalletModal = () => {
        setEWalletModalVisible(false);
    };

    const handleSavedCard = (cardInfo) => {
        setSavedCardInfo([...savedCardInfo, cardInfo]);
    };

    const handleSavedEWallet = (selectedWallet, accountNumber, accountName) => {
        // Process the saved e-wallet data here (e.g., store it in state, make API calls, etc.)
        setSavedEWalletInfo([...savedEWalletInfo, { selectedWallet, accountNumber, accountName }]);
    };

    return (
        <div className='mx-5 my-2'>
            <div className='fs-5 fw-semibold'>
                Payment Methods
            </div>
            <div className='w-50 mb-2'>
                To add a new payment method, please click the Add E-wallet/ Add Card depending on your preferred method. Any new payment method added will be used for all current and future charges.
            </div>
            {/* Render saved cards list if available */}
            {savedCardInfo.length > 0 && (
                <div>
                    <h6>Saved Cards</h6>
                    <ul>
                        {savedCardInfo.map((card, index) => (
                            <li key={index} className='border border-subtle rounded-3 p-2 mb-2' style={{ width: '140px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <i className="bi bi-bank fs-6" style={{ width: 24, height: 24, marginRight: 8 }}></i>
                                <div>
                                    {'...' + card.cardNumber.slice(-4)}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {/* Render saved e-wallets list if available */}
            {savedEWalletInfo.length > 0 && (
                <div>
                    <h6>Saved E-Wallets</h6>
                    <ul>
                        {savedEWalletInfo.map((ewallet, index) => (
                            <li key={index} className='border border-subtle rounded-3 p-2 mb-2' style={{ width: '170px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                {ewallet.selectedWallet === "gcash" && (
                                    <img src={gcashLogo} alt="Gcash Logo" style={{ width: 24, height: 24, marginRight: 8 }} />
                                )}
                                {ewallet.selectedWallet === "paymaya" && (
                                    <img src={paymayaLogo} alt="Paymaya Logo" style={{ width: 24, height: 24, marginRight: 8 }} />
                                )}
                                <div>{ewallet.accountNumber}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div>
                <button className='btn btn-outline-primary rounded-5 my-3' onClick={openCardModal}>
                    Add Card
                </button>
            </div>
            <div>
                <button className='btn btn-primary rounded-5' onClick={openEWalletModal}>
                    Add E-Wallet
                </button>
            </div>
            <PaymentCardModal show={cardModalVisible} onHide={closeCardModal} onSave={handleSavedCard} />
            <PaymentEWalletModal show={eWalletModalVisible} onHide={closeEWalletModal} onSave={handleSavedEWallet} />
        </div>
    );
}
