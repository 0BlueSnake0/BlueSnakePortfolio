from django import template
from portfolio.models import SkillCategory, Skill, Project
register = template.Library()



@register.simple_tag
def get_categories(skills):
    sorted_by_category = {skill.category.title:[] for skill in skills}
    for skill in skills:
        sorted_by_category[skill.category.title].append(skill)
    return sorted_by_category


@register.simple_tag
def get_category_skills(categories, category):
    return categories[category]


@register.simple_tag
def get_projects(profile):
    return list(Project.objects.filter(profile=profile))


@register.simple_tag
def get_item_index(lst, item):
    return list(lst).index(item);
