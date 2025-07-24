"""
Email service for Trip'Tik Restaurant
Handles sending reservation notifications via Gmail SMTP
"""

import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import logging
from typing import Dict, Any

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.smtp_server = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
        self.smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        self.email_address = os.environ.get('EMAIL_ADDRESS')
        self.email_password = os.environ.get('EMAIL_PASSWORD')
        self.restaurant_email = os.environ.get('RESTAURANT_EMAIL')
        
        logger.info(f"Email service initialized with server: {self.smtp_server}, address: {self.email_address}")
        
        if not all([self.email_address, self.email_password, self.restaurant_email]):
            logger.error(f"Email configuration missing. Address: {self.email_address}, Password: {'*' * len(self.email_password) if self.email_password else 'None'}, Restaurant: {self.restaurant_email}")
        else:
            logger.info("Email service configured successfully")
    
    def send_reservation_notification(self, reservation_data: Dict[str, Any]) -> bool:
        """
        Send reservation notification email to restaurant
        
        Args:
            reservation_data: Dictionary containing reservation details
            
        Returns:
            bool: True if email sent successfully, False otherwise
        """
        try:
            # Create message
            msg = MIMEMultipart()
            msg['From'] = self.email_address
            msg['To'] = self.restaurant_email
            msg['Subject'] = f"🍽️ Nouvelle Réservation - Trip'Tik Restaurant"
            
            # Create HTML email body
            html_body = self._create_reservation_email_body(reservation_data)
            
            # Attach HTML body
            msg.attach(MIMEText(html_body, 'html', 'utf-8'))
            
            # Connect to server and send email
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.email_address, self.email_password)
                server.send_message(msg)
            
            logger.info(f"Reservation notification email sent successfully for reservation {reservation_data.get('id')}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send reservation notification email: {str(e)}")
            return False
    
    def _create_reservation_email_body(self, reservation_data: Dict[str, Any]) -> str:
        """
        Create HTML email body for reservation notification
        
        Args:
            reservation_data: Dictionary containing reservation details
            
        Returns:
            str: HTML formatted email body
        """
        created_at = reservation_data.get('created_at', datetime.utcnow())
        if isinstance(created_at, str):
            try:
                created_at = datetime.fromisoformat(created_at.replace('Z', '+00:00'))
            except:
                created_at = datetime.utcnow()
        
        html_body = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <style>
                body {{
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                }}
                .header {{
                    background: linear-gradient(135deg, #ECEC75, #e6e67c);
                    padding: 30px;
                    text-align: center;
                    border-radius: 10px 10px 0 0;
                }}
                .header h1 {{
                    color: #0f172a;
                    margin: 0;
                    font-size: 28px;
                    font-family: 'Crimson Text', Times, serif;
                }}
                .content {{
                    background: #ffffff;
                    padding: 30px;
                    border: 1px solid #e0e0e0;
                }}
                .reservation-details {{
                    background: #f8fafc;
                    padding: 20px;
                    border-radius: 8px;
                    margin: 20px 0;
                }}
                .detail-row {{
                    display: flex;
                    justify-content: space-between;
                    padding: 8px 0;
                    border-bottom: 1px solid #e0e0e0;
                }}
                .detail-row:last-child {{
                    border-bottom: none;
                }}
                .label {{
                    font-weight: 600;
                    color: #0f172a;
                }}
                .value {{
                    color: #64748b;
                }}
                .message-box {{
                    background: #fff;
                    border: 1px solid #e0e0e0;
                    border-radius: 6px;
                    padding: 15px;
                    margin: 15px 0;
                    font-style: italic;
                }}
                .footer {{
                    background: #0f172a;
                    color: #ffffff;
                    padding: 20px;
                    text-align: center;
                    border-radius: 0 0 10px 10px;
                }}
                .status {{
                    display: inline-block;
                    background: #fbbf24;
                    color: #0f172a;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                }}
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🍽️ Trip'Tik Restaurant</h1>
                <p style="margin: 10px 0 0 0; color: #0f172a; font-size: 16px;">Nouvelle Demande de Réservation</p>
            </div>
            
            <div class="content">
                <p>Bonjour,</p>
                <p>Une nouvelle demande de réservation a été reçue via le site web :</p>
                
                <div class="reservation-details">
                    <h3 style="margin-top: 0; color: #0f172a;">Détails de la Réservation</h3>
                    
                    <div class="detail-row">
                        <span class="label">ID Réservation:</span>
                        <span class="value">{reservation_data.get('id', 'N/A')}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Nom:</span>
                        <span class="value">{reservation_data.get('name', 'N/A')}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Email:</span>
                        <span class="value">{reservation_data.get('email', 'N/A')}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Téléphone:</span>
                        <span class="value">{reservation_data.get('phone', 'N/A')}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Date souhaitée:</span>
                        <span class="value">{reservation_data.get('date', 'N/A')}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Heure souhaitée:</span>
                        <span class="value">{reservation_data.get('time', 'N/A')}</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Nombre de convives:</span>
                        <span class="value">{reservation_data.get('guests', 'N/A')} personne(s)</span>
                    </div>
                    
                    <div class="detail-row">
                        <span class="label">Statut:</span>
                        <span class="status">En Attente</span>
                    </div>
                </div>
                
                {f'''
                <div>
                    <h4 style="color: #0f172a;">Message du client:</h4>
                    <div class="message-box">
                        {reservation_data.get('message', 'Aucun message spécial')}
                    </div>
                </div>
                ''' if reservation_data.get('message') else ''}
                
                <div style="margin: 25px 0; padding: 15px; background: #fef3c7; border-radius: 6px;">
                    <p style="margin: 0; color: #92400e;">
                        <strong>⏰ Action requise:</strong> Veuillez contacter le client pour confirmer la réservation.
                    </p>
                </div>
                
                <p>Reçu le: <strong>{created_at.strftime('%d/%m/%Y à %H:%M')}</strong></p>
            </div>
            
            <div class="footer">
                <p style="margin: 0;">Trip'Tik Restaurant</p>
                <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.8;">
                    7 rue Auguste Babet, 97410 Saint-Pierre, Reunion Island<br>
                    📞 0262 59 66 94 • 📧 contact@triptik-reunion.com
                </p>
            </div>
        </body>
        </html>
        """
        
        return html_body

# Global email service instance
email_service = EmailService()