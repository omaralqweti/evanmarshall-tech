# evanmarshall.tech

![AWS](https://img.shields.io/badge/AWS-Cloud-orange)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Deployment](https://img.shields.io/badge/Deployment-Automated-green)

## Tech Stack

**Frontend:**

- Next.js 16 (React 19)
- Tailwind CSS
- TypeScript (optional for Phase 1)

**Backend:**

- AWS Lambda (Node.js 24.x)
- AWS API Gateway (REST API)
- AWS SES (Email Service)

**Infrastructure:**

- AWS S3 (Static hosting)
- AWS CloudFront (CDN)
- AWS Route 53 (DNS - if using custom domain)
- GitHub Actions (CI/CD)

**Machine Learning (Phase 2):**

- Python 3.11
- scikit-learn
- AWS SageMaker
- Docker (model containerization)

## Features

- ✅ Serverless architecture (auto-scaling, cost-optimized)
- ✅ Global CDN with CloudFront (< 100ms load times)
- ✅ Automated CI/CD pipeline
- ✅ Contact form with email notifications
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized
- 🚧 ML-powered service recommendation engine (Phase 2)
- 🚧 Infrastructure as Code with Terraform (Phase 3)

## Deployment

Automated deployment via GitHub Actions:

1. Push to `main` branch
2. GitHub Actions builds Next.js app
3. Syncs to S3 bucket
4. Invalidates CloudFront cache
5. Site live in ~2 minutes

**Manual deployment:**
\`\`\`bash
npm run build
aws s3 sync out/ s3://your-bucket-name/ --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/\*"
\`\`\`

## What I Learned

This project taught me:

- Designing serverless architectures on AWS
- Implementing CI/CD pipelines with GitHub Actions
- Building production-ready React applications
- Cost optimization in cloud infrastructure (~$10/month for production app)
- API design and Lambda function development
- (Phase 2) Deploying ML models to production
- (Phase 3) Managing infrastructure with Terraform
