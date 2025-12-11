'use client'

import React, { useState, useRef } from "react";
import Button from "@/src/components/Button";
import Section from "@/src/components/Section";
import { 
  borderColors, 
  pageBackgroundEffects, 
  projectCoverColors, 
  projectCoverStyles, 
  shadowColors 
} from "@/src/lib/styles";
import { useProjectForm } from "../../hook/useProjectForm";


export default function NewProjectPage() {
    const { 
        formData, 
        fileInputRef, 
        handleChange, 
        setColorTheme, 
        handleCoverImgUpload, 
        features 
    } = useProjectForm();

    return (
        <div className="flex flex-col lg:flex-row gap-5 p-5">
        
            {/* ==== FORM SIDE ==== */}
            <form className="w-full lg:w-[300px] shrink-0 bg-base-100 border border-base-content/20 p-4 flex flex-col gap-5 rounded-sm h-fit">
                <h1 className="font-semibold mb-2 border-b border-base-content/10 pb-2">Project Information</h1>
                
                <InputGroup label="Title">
                <input 
                    type="text" 
                    name="title" 
                    className="input-base" 
                    onChange={handleChange}
                    placeholder="Project Name"
                    value={formData.title}
                />
                </InputGroup>

                <InputGroup label="Subtitle">
                <input 
                    type="text" 
                    name="subtitle" 
                    className="input-base" 
                    onChange={handleChange}
                    placeholder="Short tagline"
                    value={formData.subtitle}
                />
                </InputGroup>

                {/* Color Theme */}
                <div>
                    <label className="text-xs font-medium text-base-content/90 mb-2 block">Background Colors</label>
                    <div className="flex justify-between gap-1 flex-wrap">
                        {Object.entries(projectCoverStyles).map(([key, value]) => {
                        const k = key as projectCoverColors;
                        const isSelected = formData.colorTheme === k;
                        return (
                            <button
                                type="button"
                                key={k}
                                className={
                                    `
                                    h-10 w-15 rounded-sm transition-all duration-200 relative
                                    ${isSelected ? `border ${borderColors[k]} scale-105` : 'hover:scale-105 hover:opacity-90'}
                                    `
                                }
                                style={{ background: value }}
                                onClick={() => setColorTheme(k)}
                            />
                        );
                        })}
                    </div>
                </div>

                {/* Image Upload */}
                <div>
                    <label className="text-xs font-medium text-base-content/90 mb-2 block">Cover Image</label>
                    <input 
                        type="file" 
                        name="coverImg" 
                        accept="image/*" 
                        ref={fileInputRef}
                        onChange={handleCoverImgUpload} 
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-xs file:font-semibold file:bg-base-200 file:text-base-content hover:file:bg-base-300 text-xs w-full text-base-content/60 border border-base-content/20 rounded-sm cursor-pointer"
                    />
                </div>

                <InputGroup label="Github">
                    <input 
                        type="text" 
                        name="github" 
                        className="input-base" 
                        onChange={handleChange}
                        placeholder="https://github.com/..."
                        value={formData.github}
                    />
                </InputGroup>

                <InputGroup label="Live Link">
                    <input 
                        type="text" 
                        name="link" 
                        className="input-base" 
                        onChange={handleChange}
                        placeholder="https://..."
                        value={formData.link}
                    />
                </InputGroup>

                <InputGroup label="Overview">
                    <textarea 
                        name="overview" 
                        className="input-base min-h-[100px] resize-y py-2" 
                        onChange={handleChange}
                        placeholder="Write a brief overview..."
                        value={formData.overview}
                    />
                </InputGroup>

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <label className="text-xs font-medium text-base-content/90">Features</label>
                        <button 
                            type="button" 
                            onClick={features.add}
                            className="text-[10px] bg-base-200 px-2 py-1 rounded-sm hover:bg-base-300 transition-colors font-semibold"
                        >
                            + ADD
                        </button>
                    </div>
                    
                    <div className="space-y-3">
                        {formData.features.map((feature, index) => (
                            <div key={index} className="flex gap-2 items-start animate-in fade-in slide-in-from-left-2 duration-300">
                                <div className="flex-1 space-y-1">
                                    <input 
                                        type="text" 
                                        placeholder="Feature Name"
                                        className="input-base py-1"
                                        value={feature.name}
                                        onChange={(e) => features.update(index, 'name', e.target.value)}
                                    />
                                    <textarea 
                                        placeholder="Description"
                                        className="input-base py-1 min-h-[50px] resize-none"
                                        value={feature.desc}
                                        onChange={(e) => features.update(index, 'desc', e.target.value)}
                                    />
                                </div>
                                <button 
                                    type="button"
                                    onClick={() => features.remove(index)}
                                    className="text-base-content/40 hover:text-red-500 pt-2 transition-colors"
                                    title="Remove"
                                >
                                    {/* Simple X Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>
                        ))}
                        {formData.features.length === 0 && (
                            <div className="text-xs text-base-content/40 italic text-center py-2 border border-dashed border-base-content/10 rounded-sm">
                                No features added yet
                            </div>
                        )}
                    </div>
                </div>
            </form>


            {/* ==== PREVIEW SIDE (Original Design + Placeholders) ==== */}
            <div className="flex-1 flex gap-10 p-5 lg:p-10 border border-base-content/20 bg-base-200 relative rounded-sm min-h-[80vh]">
                
                {/* BG Gradient */}
                {formData.colorTheme && (
                    <div
                        className="absolute inset-0 z-0"
                        style={{ background: pageBackgroundEffects[formData.colorTheme] }}
                    />
                )}

                <div className="flex-1 space-y-5 z-10">
                    {/* Tile and Subtitle with Placeholders */}
                    <div>
                        <h1 className="text-4xl font-bold font-bricolage transition-all">
                            {formData.title || <span className="opacity-20 italic">Untitled Project</span>}
                        </h1>
                        <p className="text-base-content/50 transition-all">
                            {formData.subtitle || <span className="opacity-40 italic">Add a subtitle to describe your project...</span>}
                        </p>
                    </div>  

                    {/* Cover Image / Header (With Placeholder State) */}
                    <div 
                        className={
                            `
                            flex items-center justify-center p-5 md:p-8 lg:p-10 border border-base-content/20 rounded-xs relative transition-all duration-300
                            ${!formData.coverImg ? 'bg-base-100/50 border-dashed' : ''}
                        `
                        } 
                        style={{
                            background: (formData.coverImg && formData.colorTheme) 
                                ? projectCoverStyles[formData.colorTheme] 
                                : undefined
                        }}
                    > 
                        {formData.colorTheme && (
                            <div className="absolute inset-0 z-0" style={{background: projectCoverStyles[formData.colorTheme]}} />
                        )}
                        
                        {formData.coverImg ? (
                            <div className={`rounded-sm w-full h-full ${formData.colorTheme ? shadowColors[formData.colorTheme] : ''} shadow-[0_-5px_35px_-5px_rgba(0,0,0,0.3)] relative aspect-video overflow-hidden`}>
                                <img 
                                    src={formData.coverImg as string}
                                    alt="Profile"
                                    className={`w-full h-full object-cover`}
                                />
                            </div>
                        ) : (
                        // Placeholder for the image area
                        <div className="w-full aspect-video flex flex-col items-center justify-center text-base-content/30 gap-2">
                            <p className="text-sm font-medium">Cover Image Preview</p>
                        </div>
                        )}
                    </div>

                    {/* Links */}
                    {(formData.github || formData.link) ? (
                        <div className="w-full h-16 flex items-center gap-2 bg-base-100 border border-base-content/20 p-3 rounded-sm">
                            <div className="flex-1">
                                <h2 className="text-sm font-bold">DEMO & CODE</h2>
                                <p className="text-xs text-base-content/50">View the full information here</p>
                            </div>
                            <div>
                                <Button 
                                    text="GitHub"
                                    icon="ri:github-fill"
                                    type="rectangle"
                                    className="bg-base-200! hover:bg-base-300!"
                                />
                            </div>
                            <div>
                                <Button 
                                    text={`${formData.link ? 'Demo' : 'Unavailable'}`}
                                    type="rectangle"
                                    className={`${!formData.link ? 'bg-base-100 pointer-events-none' : 'bg-base-200! hover:bg-base-300!'}`}
                                />
                            </div>
                        </div>
                    ) : (
                        // Link Placeholder
                        <div className="w-full h-16 flex items-center justify-center border border-dashed border-base-content/20 rounded-sm text-base-content/30 text-xs">
                            Links will appear here
                        </div>
                    )}

                    <div className="px-1 xl:px-10 mt-15">
                        {/* Overview Section */}
                        <Section name="OVERVIEW" className={!formData.overview ? 'opacity-30' : ''}>
                            <p 
                                className={`text-sm ${formData.overview ? 'text-base-content/80 font-normal whitespace-pre-wrap' : 'opacity-30 font-normal italic'}`}
                            >
                                {formData.overview 
                                    ? formData.overview 
                                    : 'Project overview details will display here...'
                                }
                            </p>
                        </Section>

                        {/* Overview Section */}
                        <Section name="FEATURES" className={formData.features.length < 1 ? 'opacity-30' : ''}>
                            {formData.features 
                                ? (
                                    <ul className="w-full space-y-10">
                                        {formData.features.map((feature, index) => (
                                            <li 
                                                key={`feature-${index}`}
                                                className="space-y-1 text-base-content/80 hover:text-base-content"
                                            >
                                                <div className="w-full flex items-center gap-2 p-2 bg-base-300 border border-base-content/20 rounded-sm text-base-content hover:bg-base-200">
                                                    <p className="h-8 w-8 flex items-center justify-center font-bold bg-base-100 rounded-sm border border-base-content/30">{index + 1}</p>
                                                    <h1 className="text-sm font-medium">{feature.name}</h1>
                                                </div>
                                                <p className="text-sm font-light ">{feature.desc}</p>
                                            </li>
                                        ))} 
                                    </ul>)
                                : 'Feature list details will display here'
                            }
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component
const InputGroup = ({ label, children }: { label: string, children: React.ReactNode }) => (
    <div>
        <label className="font-medium text-xs text-base-content/90 mb-1 block">{label}</label>
        {children}
    </div>
);