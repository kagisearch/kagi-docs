# Bug Bounty Program

## Program Guidelines

1. You must use your own Kagi account when researching bugs.
2. Using third-party accounts without consent is strictly prohibited.
3. Manual testing only. Automated scanning tools are not permitted
4. Bugs and security concerns should be addressed to security@kagi.com
5. You should be the first person to report the bug to be entitled for a reward.
6. Compensation will be based on the severity of the bug finding.
7. Bug Bounty rewards will be paid by PayPal or Wise in U.S. dollars after the bug is fixed.
8. Security research should follow industry standards, and no legal actions should be initiated against
security researchers as long as they comply with this policy and guidelines.


## Bounty Process

### Initial Report Submission

All security vulnerabilities must be reported to security@kagi.com with the following mandatory components:

- Detailed step-by-step reproduction instructions
- Technical description of the vulnerability
- Affected URLs, parameters, or endpoints
- Impact assessment and potential exploitation scenarios
- Environment details (browser, OS, etc.)


### Required Evidence

Your submission must include:

- Clear visual documentation (choose at least one):
  - Screenshots of the vulnerability
  - Screen recordings demonstrating the exploit
  - GIF demonstrations of the issue
  - Proof of concept code (if applicable)


### Validation Requirements

Before submission, ensure:

- The vulnerability is reproducible in a clean environment
- Multiple successful test confirmations are completed
- The issue is not related to cached data Tests are performed across different conditions to confirm consistency


### Review Process

Our security team will:

1. Acknowledge receipt within 24-48 hours
2. Perform initial triage to verify:
- Uniqueness of the report
- Current fix status
- Reproduction of the issue
3. Assess severity level according to the reward matrix
4. Communicate the assessed reward amount
5. Provide regular updates on fix progress


### Resolution & Reward

Upon successful resolution:

- Confirmation of fix implementation
- Verification request sent to reporter
- Payment is processed after fixed verification
- Case closure notification sent


## Reward Matrix

Bounty rewards are subject to assessment, depending on the severity of the report and the impact on users.

### Critical Severity ($500-$1,000)

- Remote Code Execution (RCE)
- Ability to execute arbitrary code on servers
- Command injection vulnerabilities
- File upload leading to code execution
- SQL Injection with data breach potential
- Access to sensitive database contents
- Ability to modify database records
- Database dump capabilities
- Authentication bypass affecting all users
- Complete bypass of login mechanisms
- Session prediction/manipulation
- Token forgery
- Production database access
- Direct database connection exposure
- Database credential exposure
- Backup file access
- Payment system vulnerabilities
- Price manipulation
- Transaction tampering
- Payment flow bypass

### High Severity ($100-$500)

- Stored Cross-Site Scripting (XSS)
- Persistent payload execution
- Admin panel XSS
- Multi-user impact
- Server-Side Request Forgery (SSRF)
- Internal network access
- Cloud metadata access
- Service enumeration
- Local File Inclusion (LFI)
- Configuration file access
- Source code disclosure
- System file reading
- Privilege Escalation
- Horizontal privilege escalation
- Vertical privilege escalation
- Role manipulation

### Moderate Severity ($50-$100)

- Reflected XSS
- URL-based XSS
- Search parameter manipulation
- Form field injection
- Cross-Site Request Forgery (CSRF)
- State-changing actions
- Account modification
- Settings manipulation
- Information Disclosure
- Stack traces
- Version information
- Insecure Direct Object References
- Unauthorized resource access
- Parameter manipulation
- ID enumeration

#### Low Severity ($0-$50)

- Security Header Issues
- Missing HSTS
- Incomplete CSP
- X-Frame-Options issues
- SSL/TLS Configuration
- Protocol vulnerabilities
- Certificate issues
- CORS Misconfiguration
- Overly permissive origins
- Preflight bypass
- Credential exposure


## Exclusions

The following bugs are unlikely to be eligible for a bounty reward:

- DoS/DDoS attacks
- Brute force attempts
- Rate limiting issues
- Social engineering
- Physical security
- Self-XSS
- Scanner-generated reports
- Third-party vulnerabilities
- Password complexity issues
- Non-exploitable issues
- Clickjacking without impact
- CSRF on public actions
- Missing security headers without exploit
- Version number disclosure
- Path disclosure
- Missing nonmandatory DNS records
