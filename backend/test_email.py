"""
Test script to debug email sending
"""

import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
from pathlib import Path

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

def test_email():
    """Test email configuration"""
    
    # Get configuration
    smtp_server = os.environ.get('SMTP_SERVER')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    email_address = os.environ.get('EMAIL_ADDRESS')
    email_password = os.environ.get('EMAIL_PASSWORD')
    restaurant_email = os.environ.get('RESTAURANT_EMAIL')
    
    print(f"SMTP Server: {smtp_server}")
    print(f"SMTP Port: {smtp_port}")
    print(f"Email Address: {email_address}")
    print(f"Password: {email_password[:4]}{'*' * (len(email_password)-4) if email_password else 'None'}")
    print(f"Restaurant Email: {restaurant_email}")
    
    if not all([smtp_server, email_address, email_password, restaurant_email]):
        print("❌ Missing email configuration")
        return False
    
    try:
        # Create test message
        msg = MIMEMultipart()
        msg['From'] = email_address
        msg['To'] = restaurant_email
        msg['Subject'] = "Test Email - Trip'Tik"
        
        body = "Test email from Trip'Tik restaurant reservation system."
        msg.attach(MIMEText(body, 'plain'))
        
        # Connect and send
        print("\n🔄 Connecting to SMTP server...")
        with smtplib.SMTP(smtp_server, smtp_port) as server:
            print("✅ Connected to SMTP server")
            
            print("🔄 Starting TLS...")
            server.starttls()
            print("✅ TLS started")
            
            print("🔄 Logging in...")
            server.login(email_address, email_password)
            print("✅ Login successful")
            
            print("🔄 Sending email...")
            server.send_message(msg)
            print("✅ Email sent successfully!")
            
        return True
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        return False

if __name__ == "__main__":
    print("🧪 Testing Trip'Tik Email Configuration\n")
    success = test_email()
    print(f"\n{'✅ Test passed!' if success else '❌ Test failed!'}")