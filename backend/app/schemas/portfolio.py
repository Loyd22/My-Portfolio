from typing import List, Literal, Optional

from pydantic import BaseModel


class JourneyItem(BaseModel):
    title: str
    period: str
    details: str
    bullets: List[str]


class Project(BaseModel):
    title: str
    summary: str
    highlights: List[str]
    stack: List[str]
    impact: str
    repo: str
    deploymentStatus: Literal["deployed", "not_deployed"]
    deploymentUrl: Optional[str] = None
    previewImage: Optional[str] = None
    previewImages: Optional[List[str]] = None


class StackGroup(BaseModel):
    category: str
    description: str
    items: List[str]


class Recommendation(BaseModel):
    title: str
    body: str


class Contact(BaseModel):
    github: str
    linkedin: str
    email: str
    resume: str


class PortfolioPayload(BaseModel):
    identity: dict
    availability: dict
    navigation: List[dict]
    quickFacts: List[dict]
    heroStat: dict
    currentFocus: List[str]
    workValues: List[dict]
    journey: List[JourneyItem]
    stack: List[StackGroup]
    skillsGroups: List[dict]
    projects: List[Project]
    hackathons: List[dict]
    recentCertifications: List[dict]
    experienceResume: List[dict]
    recommendations: List[Recommendation]
    experiments: List[dict]
    gallery: List[dict]
    learning: List[dict]
    contact: Contact
